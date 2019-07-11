//1.引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
//2.配置第三方模块
//2.1数据库连接池配置
var pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "xz",
  connectionLimit: 15
});
var server = express();//创建服务器
console.log("服务器已开启成功......");//打印服务器开启成功提示
//2.2跨域配置 使用跨域中间件
server.use(cors({
  origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
  credentials: true
}));
//2.3使用session中间件
server.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
}));
//2.4静态资源托管
server.use(express.static("public"));
server.listen(3000);//设置监听端口
//3.完成用户登录router接口
server.get('/login', (req, res) => {
  //3.1参数
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //3.2 正则表达式验证用户名或密码
  //3.3 sql语句
  var sql = "SELECT id FROM xz_login WHERE uname=? AND upwd=md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或者密码有误"});
    }else{
      //将当前登录用户的uid保存到session对象中
      req.session.uid=result[0].id;
      res.send({code:1,msg:"登录成功"});
    }
  })
})
//4.完成商品列表录router接口 商品分页显示
server.get("/product",(req,res)=>{
  //1.参数
  var pno=req.query.pno;
  var ps=req.query.pageSize;
  //2.设置默认值
  if(!pno){pno=1;}//未传页码值默认为1页
  if(!ps){ps=4;}//未传行数值默认为单页数据4条数
  //3.创建二条sql语句执行,嵌套完成
  var sql="SELECT lid,title,img_url,price FROM xz_laptop LIMIT ?,?";
  var offset=(pno-1)*ps;//每一页的起始行数的id=页码数-1*单页行数
  ps=parseInt(ps);//将单页行数转成数据类型
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err) throw err;
    var obj={code:1,msg:"查询成功",data:result};
    var sql="SELECT count(*) AS c FROM xz_laptop";//查询商品列表中数量
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      //console.log(result);
      var pc=Math.ceil(result[0].c/ps);
      obj.pc=pc;
      res.send(obj);
    })
  })
  //4.返回值  {code:1,msg:"查询成功" ,data:[],pageCount}
})
//5.完成购物车功能router接口
server.get("/cart",(req,res)=>{
  //1.参数 无传参
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  //2.sql查询
  var sql="SELECT id,img_url,title,price,count FROM xz_cart WHERE uid=?";
  pool.query(sql,[uid],(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  })
})
//6.删除商品功能的router接口(包含多个和单个)
server.get("/delItem",(req,res)=>{
  //1.参数  购物车的id
  var id=req.query[0];
  //console.log(id);
  //2.sql语句
 if(id.length==1){
   //console.log(id);
    var sql="DELETE FROM xz_cart WHERE id =?"; 
  }else{
    //console.log(id);
    var sql=`DELETE FROM xz_cart WHERE id IN (${id})`;
  }
  //3.json
 pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:-1,msg:"删除失败"});
    }
    
  })
})
