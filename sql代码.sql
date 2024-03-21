# 建表操作
create table drug_info
(
    drug_id           int auto_increment comment '药品ID，主键'
        primary key,
    drug_name         varchar(100)  null comment '药品名称',
    manufacturer      varchar(100)  null comment '生产厂家',
    unit              varchar(50)   null comment '单位',
    specification     varchar(50)   null comment '规格',
    stock_lower_limit int           null comment '库存下限',
    stock_upper_limit int           null comment '库存上限',
    price             int unsigned  null comment '售价',
    drug_description  varchar(500)  null comment '药品说明',
    img               varchar(1000) null comment '药品图片'
)
    comment '药品信息表';

create table stock_info
(
    stock_id            int auto_increment comment '库存ID，主键'
        primary key,
    drug_id             int            null comment '药品ID，外键关联药品信息表',
    batch_number        varchar(50)    null comment '批号',
    production_date     date           null comment '生产日期',
    purchase_date       date           null comment '进货日期',
    purchase_unit_price decimal(10, 2) null comment '进货单价',
    remaining_quantity  int            null comment '剩余数量',
    constraint stock_info_ibfk1
        foreign key (drug_id) references drug_info (drug_id)
)
    comment '库存信息表';

create table user_info
(
    user_id      int auto_increment comment '用户ID，主键'
        primary key,
    username     varchar(100) null comment '用户名称',
    password     varchar(100) null comment '密码',
    role         varchar(50)  null comment '角色',
    contact_info varchar(100) null comment '联系方式',
    address      varchar(255) null comment '地址'
)
    comment '用户信息表';

create table purchase_order
(
    purchase_id           int auto_increment comment '进货单ID，主键'
        primary key,
    user_id               int            null comment '供应商ID，外键关联用户信息表',
    purchase_date         date           null comment '进货日期',
    purchase_total_amount decimal(10, 2) null comment '进货总金额',
    note                  varchar(500)   null comment '备注',
    constraint purchase_order___fk1
        foreign key (user_id) references user_info (user_id)
)
    comment '进货单表';

create table sales_info
(
    sales_id         int auto_increment comment '销售ID，主键'
        primary key,
    drug_id          int            null comment '药品ID，外键关联药品信息表',
    user_id          int            null comment '客户ID，外键关联用户信息表',
    sales_date       date           null comment '销售日期',
    sales_quantity   int            null comment '销售数量',
    sales_unit_price decimal(10, 2) null comment '销售单价',
    sales_amount     decimal(10, 2) null comment '销售金额',
    constraint sales_info_ibfk1
        foreign key (drug_id) references drug_info (drug_id),
    constraint sales_info_ibfk_3
        foreign key (user_id) references user_info (user_id)
)
    comment '销售信息表';



# 以下是系统用到过的sql语句

# 管理员操作
# 查询药品信息表
SELECT * FROM drug_info;
# 根据药品id查询药品信息表
SELECT * FROM drug_info WHERE drug_id = 1;
# 根据药品名称模糊查询库存
SELECT * FROM drug_info WHERE (drug_name LIKE '感冒%') OR (drug_name LIKE '%感冒');
# 添加药品
INSERT INTO drug_info (drug_name, drug_descroption, manufacturer, unit, specification, stock_lower_limit, stock_upper_limit, price) VALUES ('感冒灵','广州药厂','盒','50g',500,1500,38,'治感冒的药');
# 删除药品
DELETE FROM drug_info WHERE drug_info.drug_id=10;
# 级联删除库存该药品
DELETE FROM stock_info WHERE stock_info.drug_id=10;
# 修改药品下限数量
UPDATE drug_info SET drug_info.stock_lower_limit = 100 WHERE drug_info.drug_id=10;
# 修改药品上限数量
UPDATE drug_info SET drug_info.stock_upper_limit = 10000 WHERE drug_info.drug_id=10;
# 修改药品售价
UPDATE drug_info SET drug_info.price = 38 WHERE drug_info.drug_id=10;

# 查询库存信息表
SELECT s.stock_id, s.drug_id, d.drug_name, s.batch_number, s.production_date, s.purchase_date, s.purchase_unit_price, s.remaining_quantity FROM stock_info AS s JOIN drug_info AS d WHERE d.drug_id IN (s.drug_id);
# 根据库存id查询库存
SELECT s.stock_id, s.drug_id, d.drug_name, s.batch_number, s.production_date, s.purchase_date, s.purchase_unit_price, s.remaining_quantity
FROM stock_info AS s JOIN drug_info AS d WHERE d.drug_id IN (s.drug_id) AND s.stock_id=1;
# 根据药品名称模糊查询库存
SELECT s.stock_id, s.drug_id, d.drug_name, s.batch_number, s.production_date, s.purchase_date, s.purchase_unit_price, s.remaining_quantity FROM stock_info AS s JOIN drug_info AS d WHERE d.drug_id IN (s.drug_id) AND
s.drug_id IN (SELECT drug_id FROM drug_info WHERE (drug_name LIKE '感冒%') OR (drug_name LIKE '%感冒') OR (drug_name LIKE '%感冒%'));

# 查询销售信息表
SELECT s.sales_id, d.drug_name, u.username, s.sales_date, s.sales_quantity, s.sales_unit_price, s.sales_amount
FROM sales_info AS s JOIN drug_info AS d JOIN user_info AS u
WHERE d.drug_id IN (s.drug_id) AND u.user_id IN (s.user_id);
# 根据客户id查询销售信息表
SELECT s.sales_id, d.drug_name, u.username, s.sales_date, s.sales_quantity, s.sales_unit_price, s.sales_amount FROM sales_info AS s JOIN drug_info AS d JOIN user_info AS u WHERE d.drug_id IN (s.drug_id) AND u.user_id IN (s.user_id) AND s.sales_id=1;
# 根据客户名称或药品名称查询销售信息表
SELECT s.sales_id, d.drug_name, u.username, s.sales_date, s.sales_quantity, s.sales_unit_price, s.sales_amount FROM sales_info AS s JOIN drug_info AS d JOIN user_info AS u WHERE d.drug_id IN (s.drug_id) AND u.user_id IN (s.user_id) AND (u.username LIKE '%三' OR u.username LIKE '三%' OR u.username LIKE '%三%' OR d.drug_name LIKE '%感冒' OR d.drug_name LIKE '感冒%' OR d.drug_name LIKE '%感冒%');

# 查询进货单表
SELECT p.purchase_id,p.user_id,u.username,p.purchase_date,p.purchase_total_amount,p.note FROM purchase_order AS p JOIN user_info AS u WHERE p.user_id=u.user_id;
# 根据供应商id查询进货单表
SELECT p.purchase_id,p.user_id,u.username,p.purchase_date,p.purchase_total_amount,p.note FROM purchase_order AS p JOIN user_info AS u WHERE p.user_id=u.user_id AND p.purchase_id=2;
# 根据供应商名称查询进货单表
SELECT p.purchase_id,p.user_id,u.username,p.purchase_date,p.purchase_total_amount,p.note FROM purchase_order AS p JOIN user_info AS u WHERE p.user_id=u.user_id AND (u.username LIKE '%六' OR u.username LIKE '六%' OR u.username LIKE '%六%');

# 查询用户信息表
SELECT * FROM user_info;
# 查询客户列表
SELECT * FROM user_info WHERE user_info.role='客户';
# 查询供应商列表
SELECT * FROM user_info WHERE user_info.role='供应商';
# 修改用户密码
UPDATE user_info SET user_info.password = '123456' WHERE user_info.username='张三';
# 修改用户角色
UPDATE user_info SET user_info.role = '供应商' WHERE user_info.username='张三';


# 客户操作
# 查询药品信息表中的药品id、药品名称、药品说明、生产厂家、单位、售价
SELECT drug_id,drug_name,drug_description,manufacturer,unit,price FROM drug_info;

# 查询购买记录 订单号、药品名称、购买日期、数量、金额
SELECT s.sales_id,d.drug_name,s.sales_date,s.sales_quantity,s.sales_amount FROM sales_info AS s JOIN drug_info AS d WHERE s.user_id=2 AND d.drug_id=s.drug_id;
#根据订单号查询
SELECT s.sales_id,d.drug_name,s.sales_date,s.sales_quantity,s.sales_amount FROM sales_info AS s JOIN drug_info AS d WHERE s.user_id=2 AND d.drug_id=s.drug_id AND s.sales_id=1;
#根据药品名称模糊搜索
SELECT s.sales_id,d.drug_name,s.sales_date,s.sales_quantity,s.sales_amount FROM sales_info AS s JOIN drug_info AS d WHERE s.user_id=2 AND d.drug_id=s.drug_id AND (d.drug_name LIKE '%感冒' OR d.drug_name LIKE '感冒%' OR d.drug_name LIKE '%感冒%');

# 注册 添加用户
INSERT INTO user_info (username,password) VALUES ('老八',123456);

SELECT * FROM user_info WHERE username='刘浩洋' AND password='123456';


# 删除药品
DELETE FROM drug_info WHERE drug_info.drug_id=10;
# 级联删除库存该药品
DELETE FROM stock_info WHERE stock_info.drug_id=10;
# 修改药品下限数量
UPDATE drug_info SET drug_info.stock_lower_limit = 100 WHERE drug_info.drug_id=10;
# 修改药品上限数量
UPDATE drug_info SET drug_info.stock_upper_limit = 10000 WHERE drug_info.drug_id=10;
# 修改药品售价
UPDATE drug_info SET drug_info.price = 38 WHERE drug_info.drug_id=10;

# 查询用户信息表
SELECT * FROM user_info;
# 查询客户列表
SELECT * FROM user_info WHERE user_info.role='客户';
# 查询供应商列表
SELECT * FROM user_info WHERE user_info.role='供应商';
# 修改用户密码
UPDATE user_info SET user_info.password = '123456' WHERE user_info.username='张三';
# 修改用户角色
UPDATE user_info SET user_info.role = '供应商' WHERE user_info.username='张三';

#客户购买药品
#先统计药品ID为1的药品剩余数量总数
SELECT SUM(remaining_quantity) AS total_quantity FROM stock_info WHERE drug_id = 1;
#随后按生产日期递增顺序依次递减
SET @remaining_to_reduce = 90;
SELECT remaining_quantity INTO @temp FROM stock_info WHERE drug_id = 1 ORDER BY production_date LIMIT 1;
UPDATE stock_info SET remaining_quantity = CASE WHEN remaining_quantity >= @remaining_to_reduce THEN remaining_quantity - @remaining_to_reduce ELSE 0 END WHERE drug_id = 1 ORDER BY production_date LIMIT 1;
SET @remaining_to_reduce = CASE WHEN @remaining_to_reduce >= @temp THEN @remaining_to_reduce - @temp ELSE 0 END;
SET foreign_key_checks = 0;
DELETE FROM stock_info WHERE remaining_quantity = 0 AND drug_id = 1 LIMIT 1;
SET foreign_key_checks = 1;
SELECT @remaining_to_reduce;
#设置总删除数量
SET @remaining_to_reduce = 90;
SELECT remaining_quantity FROM stock_info WHERE drug_id = 1 ORDER BY production_date LIMIT 1;
UPDATE stock_info SET remaining_quantity = CASE WHEN remaining_quantity >= @remaining_to_reduce THEN remaining_quantity - @remaining_to_reduce ELSE 0 END WHERE drug_id = 1 ORDER BY production_date LIMIT 1;
remaining_to_reduce=max(remaining_to_reduce-temp,0);
# SET @remaining_to_reduce = CASE WHEN @remaining_to_reduce >= @temp THEN @remaining_to_reduce - @temp ELSE 0 END;
SET foreign_key_checks = 0;
DELETE FROM stock_info WHERE remaining_quantity = 0 AND drug_id = 1 LIMIT 1;
SET foreign_key_checks = 1;
SELECT @remaining_to_reduce;

#更新销售记录
INSERT INTO sales_info (drug_id, user_id, sales_date, sales_quantity, sales_unit_price, sales_amount) VALUES (1,2,'2023-01-01',10,15,150);

UPDATE stock_info SET remaining_quantity=remaining_quantity-0 WHERE drug_id = 1 ORDER BY production_date desc ;

#供应商进货
#更新进货单表
INSERT INTO purchase_order (user_id,purchase_date,purchase_total_amount,note) VALUES (供应商id,进货日期,进货总金额,备注);
#更新库存
INSERT INTO stock_info (drug_id, batch_number, production_date, purchase_date, purchase_unit_price, remaining_quantity) VALUES (药品ID,批号,生产日期,进货日期,单价,进货数量);

#查询所有人的信息
SELECT user_id,username,password,role,contact_info,address FROM user_info;
#查询客户信息
SELECT user_id,username,password,role,contact_info,address FROM user_info WHERE role='客户';
#查询供应商信息
SELECT user_id,username,password,role,contact_info,address FROM user_info WHERE role='供应商';
#查询管理员信息
SELECT user_id,username,password,role,contact_info,address FROM user_info WHERE role='管理员';
#根据用户信息模糊搜索
SELECT user_id,username,password,role,contact_info,address FROM user_info WHERE username LIKE '%三' OR username LIKE '三%' OR username LIKE '%三%';
#修改所有人的信息
UPDATE user_info SET username='',password='',role='',contact_info='',address='' WHERE user_id=;
#删除指定用户
SET FOREIGN_KEY_CHECKS=0;
DELETE FROM user_info WHERE user_id=2;
SET FOREIGN_KEY_CHECKS=1;
#查询自己的进货信息
SELECT purchase_id,purchase_date,purchase_total_amount,note FROM purchase_order WHERE user_id=自己id;
#根据进货日期搜索
SELECT purchase_id,purchase_date,purchase_total_amount,note FROM purchase_order WHERE user_id=14 AND purchase_date>='2023-12-10' AND purchase_date<='2023-12-15';
#根据备注模糊搜索
SELECT purchase_id,purchase_date,purchase_total_amount,note FROM purchase_order WHERE user_id=自己id AND (note LIKE '%内容' OR note LIKE '内容%' OR note LIKE '%内容%') ;

#统计库存中id为x的药品总量
SELECT SUM(stock_info.remaining_quantity) FROM stock_info WHERE drug_id=2;
SELECT stock_upper_limit FROM drug_info WHERE drug_id=2;