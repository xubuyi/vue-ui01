USE xz;
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd  VARCHAR(32)
);
INSERT INTO xz_login VALUES(null,'tom',md5('123'));

INSERT INTO xz_login VALUES(null,'jerry',md5('123'));

#为商品表添加一列
 ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
#每一个商品图片 
 UPDATE xz_laptop SET img_url = '01.jpg';
#为购物车表添加商品列表
INSERT INTO xz_cart VALUES(null,'011.jpg',100,'罗技鼠标',1,2);
INSERT INTO xz_cart VALUES(null,'012.jpg',110,'内存条',1,2);
INSERT INTO xz_cart VALUES(null,'011.jpg',101,'罗技鼠标3',1,2);
INSERT INTO xz_cart VALUES(null,'011.jpg',102,'罗技鼠标4',1,2);
INSERT INTO xz_cart VALUES(null,'011.jpg',100,'罗技鼠标',1,1);
INSERT INTO xz_cart VALUES(null,'012.jpg',110,'内存条',1,1);
INSERT INTO xz_cart VALUES(null,'011.jpg',101,'罗技鼠标3',1,1);
INSERT INTO xz_cart VALUES(null,'011.jpg',102,'罗技鼠标4',1,1);



