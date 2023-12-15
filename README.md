目录
1 绪论	1
1.1药品存销信息管理系统	1
1.2药品存销信息管理系统的发展现状	1
1.3系统开发环境	2
1.4本文的主要工作	2
1.5论文结构	2
2 相关技术介绍	3
2.1 RDBMS简单的介绍	3
2.2应用开发工具简单的介绍	3
3 需求分析	4
3.1可行性分析	4
3.2数据字典	4
3.3数据流图	6
4 概念结构设计	10
4.1 ER图分析	10
5 逻辑结构设计	12
5.1设计关系模型并对其进行优化分析	12
5.2将上述关系模型转换成具体RDBMS支持的实际关系数据模型	13
5.3设计用户子模式（外模式）	14
5.4系统功能模块图和模块功能描述（模块IPO图）；	15
5.5安全性和完整性设计	16
6 数据库物理设计	18
6.1选择建立索引	18
6.2确定数据的存放位置	18
6.3确定系统配置	18
7 数据库实施	19
7.1创建数据库及数据库对象	19
7.2数据库备份和恢复方案	21
7.3用户界面的设计和实现、应用程序编码	22
8 系统测试方案和测试报告	25
8.1 简述	25
8.2 测试环境	25
8.3 测试过程及方法	25
8.4测试结果	25
9 安装和使用说明	50
9.1本地安装	50
9.2服务器部署	50
10 总结与体会	51
参考文献	52























1 绪论
1.1药品存销信息管理系统
随着医疗技术的不断发展和人们健康意识的提高，药品市场需求逐渐增长。药品存销管理是保证医疗保健行业正常运转的重要组成部分，对于医疗机构和药品经营企业而言，如何有效地管理药品存货、销售和进货等信息，成为了一大挑战。
传统的药品管理方式主要依靠人工操作，这种方式存在很多问题，如数据录入效率低、数据准确性差、数据查询不方便等。另外，随着药品市场的扩大，管理复杂度也在不断提高，传统的管理方式已经无法满足需求。
面对这些问题，计算机技术的应用为药品存销管理提供了新的解决方案。通过建立药品存销信息管理系统，可以实现药品信息的集中管理、库存信息的实时更新、进货和销售信息的自动记录等功能，提高了药品管理的效率和准确性，同时也为医疗机构和药品经营企业提供了更好的服务。
药品存销信息管理系统一种基于B/S架构的信息管理系统，该系统利用Web浏览器作为客户端，提供方便易用的用户界面，通过Web服务器、应用服务器和数据库服务器等组件实现业务逻辑的处理和数据的存储。系统具有药品信息管理、库存管理、销售管理、进货管理、用户权限管理等功能，可以满足药品存销管理的各种需求。

1.2药品存销信息管理系统的发展现状
药品存销信息管理系统是一种应用广泛的医疗信息化管理系统，已经在医院、药店、医药代理商等领域得到了广泛应用。目前，国内外药品存销信息管理系统的发展现状如下。
（1）国内发展现状
随着计算机技术和互联网技术的不断发展，国内的药品存销信息管理系统也得到了快速的发展。目前，国内的医院、药店和医药代理商等药品经营企业都开始采用药品存销信息管理系统来管理药品的库存、销售和进货等信息。
国内的药品存销信息管理系统主要有两类：一类是由大型医疗信息化企业开发的综合性管理系统，如联众医疗、银海药业等；另一类是由小型软件公司或个人开发的针对特定行业的定制化系统，如医药电商平台、药店管理软件等。这些系统都具有库存管理、销售管理、进货管理、报表统计和用户权限管理等功能。
（2）国外发展现状
国外的药品存销信息管理系统也得到了广泛应用。欧美等发达国家的医疗信息化水平相对较高，药品存销信息管理系统的应用也比较成熟。国外的药品存销信息管理系统主要由医院和药店等医药经营机构使用。
目前，国外药品存销信息管理系统的发展趋势主要是向云计算、大数据和人工智能等方向发展。这些技术的应用可以提高系统的处理效率和准确性，同时也可以实现更多的功能，如药品追溯、药品安全监管等。
总的来说，药品存销信息管理系统已经成为医疗信息化管理的重要组成部分，在国内外得到了广泛应用和发展。随着技术的不断创新和升级，药品存销信息管理系统将会更加智能化、便捷化和安全化。

1.3系统开发环境
操作系统：Windows 10
编译环境：Node.js
编译工具：Visual Studio Code
数据库系统：MySQL

1.4本文的主要工作
本文分析了选修课管理系统的实现方法，在Windows 10环境下，采用Node.js实现了一个选修课管理系统。主要工作如下：
（1）分析了系统需求；
（2）进行了系统设计；
（3）详细分析了选修课管理系统的实现细节；
（4）对系统进行了实现、测试和分析。

1.5论文结构
第一部分 封面
第二部分 目录
第三部分 正文
第1节 引言（或绪论）
第2节 相关技术介绍（分析），对使用的RDBMS和应用开发工具作简单的介绍
第3节 需求分析，有数据字典（包括数据项、数据结构、数据流、数据存储和数据处理，参考数据库教材和软件工程教材）和数据流图；
第4节 概念结构设计，E-R图和其分析。
第5节 逻辑结构设计，包括设计关系模型并对其进行优化分析、将上述关系模型转换成具体RDBMS支持的实际关系数据模型、设计用户子模式（外模式）、系统功能模块图和模块功能描述（模块IPO图）和安全性（用户类别和权限）和完整性（主、外码和用户自定义的完整性约束）设计。
第6节 数据库物理设计，包括选择建立索引、确定数据的存放位置以及确定系统配置。
第7节 数据库实施，包括创建数据库及数据库对象（给出创建数据库及数据库对象的SQL脚本文件）、数据库备份和恢复方案（给出具体方案）和用户界面的设计和实现、应用程序编码（给出关键程序代码）。
第8节 系统测试方案和测试报告
第9节 安装和使用说明
第10节 总结与体会
第四部分参考文献




2 相关技术介绍
2.1 RDBMS简单的介绍
MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型和大型网站的开发都选择 MySQL作为网站数据库。

2.2应用开发工具简单的介绍
React 是一个由 Facebook 开发的用于构建用户界面的 JavaScript 库，它可以帮助开发者构建大型、高性能的 Web 应用程序。React 提供了一种声明式的、组件化的方式来构建用户界面，使得开发者可以更加轻松地管理应用的状态和数据流动。
Visual Studio Code（VSCode）是一款由 Microsoft 开发的免费开源的跨平台代码编辑器，它支持多种编程语言，拥有丰富的扩展插件生态系统，可以帮助开发者提高工作效率。在 VSCode 中使用 React 进行开发时，可以通过安装相关的扩展插件来获得语法高亮、代码补全、调试支持等功能，使得编写和调试 React 应用变得更加便捷。
在 VSCode 中进行 React 开发，开发者可以利用各种插件和工具来提高开发效率，比如 ESLint、Prettier 等工具可以帮助保持代码风格的一致性，Debugger for Chrome 插件可以帮助进行 React 应用的调试，而 Live Server 插件可以方便地进行实时预览和调试。同时，VSCode 还提供了丰富的快捷键和自定义配置选项，使得开发者可以根据自己的习惯来优化开发环境。



















3 需求分析
3.1可行性分析
（1）技术可行性：
该系统使用MySQL数据库作为数据存储平台，采用JavaScript语言开发，具有良好的稳定性和扩展性。同时，JavaScript语言和MySQL数据库都是业界常用的技术，拥有大量的技术支持和社区资源。基于 Windows 和 SOL Server，运用先进的Node 技术、先进的 JavaScript语言，采用 B/S 模式开发的药品存销信息管理系统，将客户、供应商、管理员、有机地结合在一起，有效地提高管理水平和效率。因此技术上是可行的。
（2）经济可行性：
药品存销信息管理系统是一种企业应用软件，主要目的是提高企业管理效率和减少人力成本。虽然开发和维护成本可能较高，但由于该系统可以提高企业运营效率和销售收入，且系统界面友好，操作简单，系统的配置要求不高，因此从长期来看是经济可行的。
（3）市场可行性：
目前，药品销售管理系统是医药行业中广泛应用的一种软件。随着互联网+时代的到来，越来越多的药店和医疗机构需要通过数字化手段来管理业务，并提供更加便捷的服务。因此，市场上对药品销售管理系统的需求还将继续增长。
（4）操作可行性：
药品销售管理系统应该易于操作和使用，方便用户进行业务管理和查询操作。因此，该系统应该具有良好的界面设计、操作流程和使用说明，使用户可以快速上手并熟练使用。

3.2数据字典
（1）数据项：
药品信息表（drug_info）
·药品ID（drug_id）：主键，唯一标识每个药品的编号
·药品名称（drug_name）：药品的名称
·生产厂家（manufacturer）：药品的生产厂家
·单位（unit）：药品的计量单位
·规格（specification）：药品的规格描述
·售价 (price）：药品的售价
·库存下限（stock_lower_limit）：药品的库存下限，表示该药品库存的最低警戒值
·库存上限（stock_upper_limit）：药品的库存上限，表示该药品库存的最高容量值
·售价（price）：药品的销售单价
·药品说明（drug_descroption）：药品的说明
库存信息表（stock_info）
·库存ID（stock_id）：主键，唯一标识每个库存的编号
·药品ID（drug_id）：外键，关联药品信息表中的药品ID
·批号（batch_number）：药品的批次号
·生产日期（production_date）：库存的生产日期
·进货日期（purchase_date）：库存的进货日期
·进货单价（purchase_unit_price）：进货时的单价
·剩余数量（remaining_quantity）：库存中剩余的数量
销售信息表（sales_info）
·销售ID（sales_id）：主键，唯一标识每次销售的编号
·药品ID（drug_id）：外键，关联药品信息表中的药品ID
·客户ID（customer_id）：外键，关联用户信息表中的用户ID
·销售日期（sales_date）：销售的日期
·销售数量（sales_quantity）：销售时的数量
·销售单价（sales_unit_price）：销售时的单价
·销售金额（sales_amount）：销售时的总金额
进货单表（purchase_order）
·进货单ID（purchase_id）：主键，唯一标识每个进货单的编号
·供应商ID（user_id）：外键，关联用户信息表中的用户ID，表示供应商的信息
·进货日期（purchase_date）：进货的日期
·进货总金额（purchase_total_amount）：进货的总金额
·备注（note）：进货备注
用户信息表（user_info）
·用户ID（user_id）：主键，唯一标识每个用户的编号
·用户名称（username）：用户的名称
·密码（password）：用户的密码
·角色（role）：用户的角色，如管理员、供应商、客户等
·联系方式（contact_info）：用户的联系方式
·地址（address）：用户的地址

（2）数据结构：
·整数（INT）
·无符号整数（INT UNSIGNED）
·字符串（VARCHAR）
·日期（DATE）
·小数（DECIMAL）

（3）数据流：
·药品信息表 -> 库存信息表：药品ID
·药品信息表 -> 销售信息表：药品ID
·药品信息表 -> 进货单表：药品ID
·库存信息表 -> 销售信息表：库存ID
·用户信息表 -> 进货单表：供应商ID
·用户信息表 -> 销售信息表：客户ID

（4）数据存储：
·药品信息表（drug_info）
·库存信息表（stock_info）
·销售信息表（sales_info）
·进货单表（purchase_order）
·用户信息表（user_info）

（5）数据处理：
·添加药品信息：向药品信息表中插入新的药品信息
·更新药品信息：更新药品信息表中现有药品的信息
·查询药品信息：查询药品信息表中对应药品的信息
·删除药品信息：删除药品信息表中现有药品的信息

·查询库存信息：查询库存信息表中对应的库存信息

·添加销售信息：向销售信息表中插入新的销售信息
·查询销售信息：查询销售信息表中对应的销售信息

·添加进货单：向进货单表中插入新的进货单信息
·查询进货单：查询进货单表中的进货单信息

·添加用户信息：向用户信息表中插入新的用户信息
·更新用户信息：更新用户信息表中现有用户的信息
·查询用户信息：查询用户信息表中对应用户的信息
·删除用户信息：删除用户信息表中现有用户的信息

·客户购买药品：库存中减少相应药品的剩余数量
·供应商供应药品：库存中增加相应药品的剩余数量

3.3数据流图
（1）顶层图

图3-1 药品存销信息管理系统顶层图
（2）一层图

图3-2 药品存销信息管理系统一层图
（3）二层图

图3-3 用户登录注册子系统二层图

图3-4 用户信息管理子系统二层图

图3-5 药品信息管理子系统二层图

图3-6 库存信息管理子系统二层图

图3-7 销售信息管理子系统二层图

图3-8 进货信息管理子系统二层图

图3-9 药品购买子系统二层图

图3-10 药品进货子系统二层图



























4 概念结构设计
4.1 ER图分析
（1）实体
有七个实体，分别是管理员、客户、供应商、药品、库存、销售信息、进货单。
·管理员属性包括用户ID、名称、密码、联系方式、地址；
·客户属性包括用户ID、名称、密码、联系方式、地址；
·供应商属性包括用户ID、名称、密码、联系方式、地址；
·药品属性包括药品ID、药品名称、生产厂家、单位、规格、库存下限、库存上限、售价、药品说明；
·库存属性包括库存ID、药品ID、批号、生产日期、进货日期、进货单价、剩余数量；
·销售信息属性包括销售ID、药品ID、客户ID、销售日期、销售数量、单价、销售总价；
·进货单属性包括进货ID、用户ID、进货日期、总金额、备注。

（2）实体之间的关系
·管理员与客户之间是1：n关系
·管理员与供应商之间是1：n关系
·管理员与药品之间是1：n关系
·客户与销售信息之间是1：n关系
·客户与药品之间是1：n关系
·供应商与进货单之间是1：n关系
·供应商与药品之间是1：n关系
·库存与销售信息之间是1：n关系
·库存与进货单之间是1：n关系
·库存与药品之间是1：n关系

（3）ER图
通过上述分析，可以绘制药品存销信息管理系统的ER图，具体如图3-1所示。

图4-1 药品存销信息管理系统ER图



























5 逻辑结构设计
5.1设计关系模型并对其进行优化分析
通过对需求分析和概念结构设计的分析，我们可以确立下列五个数据库表。
（1）创建药品信息表表（drug_info）
字段名	代码	类型	约束
药品ID	drug_id	int	主键
药品名称	drug_name	varchar(100)	非空
生产厂家	manufacturer	varchar(100)	非空             
单位	unit	varchar(50)	非空
规格	specification	varchar(50)	非空
库存下限	stock_lower_limit	int	非空
库存上限	stock_upper_limit	int	非空
售价	price	int unsigned	非空
药品说明	drug_description	varchar(500)	

（2）创建库存信息表（stock_info）
字段名	代码	类型	约束
库存ID	stock_id	int	主键
药品ID	drug_id	int	外键，关联药品信息表
批号	batch_number	varchar(50)	非空
生产日期	production_date	date	非空
进货日期	purchase_date	date	非空
进货单价	purchase_unit_price	decimal(10,2)	非空
剩余数量	remaining_quantity	int	

（3）创建销售信息表（sales_info）
字段名	代码	类型	约束
销售ID	sales_id	int	主键
药品ID	drug_id	int	外键，关联药品信息表
客户ID	user_id	int	外键，关联用户信息表
销售日期	sales_date	date	非空
销售数量	sales_quantity	int	非空
销售单价	sales_unit_price	decimal(10,2)	非空
销售金额	sales_amount	decimal(10,2)	非空

（4）创建进货单表（purchase_order） 
字段名	代码	类型	约束
进货单ID，主键	purchase_id	int	主键
供应商ID	user_id	int	外键，关联用户信息表
进货日期	purchase_date	date	非空
进货总金额	purchase_total_amount	decimal(10,2)	非空
备注	note	varchar(500)	
（5）创建用户信息表(user_info) 
字段名	代码	类型	约束
用户ID	user_id	int	主键
用户名称	username	varchar(100)	非空
密码	password	varchar(100)	非空
角色	role	varchar(50)	非空
联系方式	contact_info	varchar(100)	
地址	address	varchar(255)	

优化分析：
·药品信息表和库存信息表通过药品ID关联，支持多个库存与一个药品的关系。
·销售信息表通过药品ID关联，支持多个销售记录与一个药品的关系。
·销售信息表通过客户ID关联，支持多个销售记录与一个客户的关系。
·进货单表通过供应商ID关联，支持多个进货单与一个供应商的关系。
·用户信息表中的角色属性可以用于区分管理员、供应商和客户等不同角色的用户。

5.2将上述关系模型转换成具体RDBMS支持的实际关系数据模型
本系统使用的RDBMS为MySQL，以下创建数据库表的代码均为MySQL支持的SQL代码。
（1）创建药品信息表表（drug_info）
1.CREATE TABLE `drug_info` (
2.  `drug_id` int NOT NULL AUTO_INCREMENT ,
3.  `drug_name` varchar(100) DEFAULT NULL ,
4.  `manufacturer` varchar(100) DEFAULT NULL ,
5.  `unit` varchar(50) DEFAULT NULL ,
6.  `specification` varchar(50) DEFAULT NULL ,
7.  `stock_lower_limit` int DEFAULT NULL ,
8.  `stock_upper_limit` int DEFAULT NULL ,
9.  `price` int unsigned DEFAULT NULL ,
10.  `drug_description` varchar(500) DEFAULT NULL ,
11.  PRIMARY KEY (`drug_id`)
12.);
（2）创建库存信息表（stock_info）
1.create table stock_info
2.(
3.    stock_id            int auto_increment primary key ,
4.    drug_id             int            null ,
5.    batch_number        varchar(50)    null ,
6.    production_date     date           null ,
7.    purchase_date       date           null ,
8.    purchase_unit_price decimal(10, 2) null ,
9.    remaining_quantity  int            null ,
10.    constraint stock_info_ibfk1
11.        foreign key (drug_id) references drug_info (drug_id)
12.);
（3）创建销售信息表（sales_info）
1.create table sales_info
2.(
3.    sales_id         int auto_increment primary key ,
4.    drug_id          int            null ,
5.    user_id          int            null ,
6.    sales_date       date           null ,
7.    sales_quantity   int            null ,
8.    sales_unit_price decimal(10, 2) null ,
9.    sales_amount     decimal(10, 2) null ,
10.    constraint sales_info_ibfk1
11.        foreign key (drug_id) references drug_info (drug_id),
12.    constraint sales_info_ibfk_3
13.        foreign key (user_id) references user_info (user_id)
14.);
（4）创建进货单表（purchase_order） 
1.create table purchase_order
2.(
3.    purchase_id           int auto_increment primary key ,
4.    user_id               int            null ,
5.    purchase_date         date           null ,
6.    purchase_total_amount decimal(10, 2) null ,
7.    note                  varchar(500)   null ,
8.    constraint purchase_order___fk1
9.        foreign key (user_id) references user_info (user_id)
10.);
（5）创建用户信息表(user_info) 
1.create table user_info
2.(
3.    user_id      int auto_increment primary key ,
4.    username     varchar(100) null ,
5.    password     varchar(100) null ,
6.    role         varchar(50)  null ,
7.    contact_info varchar(100) null ,
8.    address      varchar(255) null 
9.);

5.3设计用户子模式（外模式）
为药品存销信息管理系统设计用户子模式（外模式），需要考虑不同用户的需求和权限，为其提供不同的视图和接口。以下是根据需求设计的用户子模式（外模式）。
（1）管理员视图：
·可以进行用户名称和密码的登录
·可以查看、添加、修改和删除所有用户信息，包括用户ID、用户名、密码、角色、联系方式、地址；
·可以管理用户权限，包括添加、修改和删除用户子模式；
·可以查看、添加、修改和删除药品信息，包括药品ID、药品名称、药品说明、生产厂家、药品库存下限、药品库存上限、售价；
·可以查看库存信息，包括库存ID、药品ID、药品名称、批号、生产日期、进货日期、进货单价、剩余数量；
·可以查看销售信息，包括销售ID、药品名称、客户名称、销售日期、销售数量、销售单价、销售金额；
·可以查看入库信息，包括进货单ID、供应商ID、供应商名称、进货日期、进货总金额、备注；
（2）客户视图：
·可以进行用户名称和密码的登录
·只能查看和修改个人的用户信息，包括个人用户名、个人角色、个人联系方式、个人地址；
·可以查看和搜索药品信息，不能修改、添加或删除，包括药品ID、药品名称、药品说明、生产厂家、药品库存下限、药品库存上限、售价；
·可以进行购买操作，选择相应的药品和库存记录，填写购买数量。
·只能查看个人的购买记录，包括订单号、药品名称、购买日期、数量、金额；
（3）供应商视图：
·可以进行用户名称和密码的登录
·只能查看和修改个人的用户信息，包括个人用户名、个人角色、个人联系方式、个人地址；
·可以查看和搜索药品信息，不能修改、添加或删除，包括药品ID、药品名称、药品说明、生产厂家、药品库存下限、药品库存上限、售价；
·可以根据药品信息进行进货操作，添加新的库存记录；
·只能查看个人的进货记录，包括订单号、药品名称、购买日期、数量、金额；

5.4系统功能模块图和模块功能描述（模块IPO图）；
（1）系统功能模块图
以下是该药品存销信息管理系统的系统功能模块图
图5-1 系统功能模块图
（2）模块功能描述
·用户登陆注册模块
输入：用户名称、密码
处理：验证用户名称和密码是否匹配、输入信息是否合法
输出：登录和注册结果
·用户信息管理模块
输入：用户信息（用户名称、密码、角色、联系信息、地址）
处理：添加、修改、删除、搜索用户信息
输出：用户信息列表
·药品信息管理管理模块
输入：药品信息（药品名称、药品说明、生产厂家、单位、规格、库存下限、库存上限、售价）
处理：添加、修改、删除、搜索药品信息
输出：药品信息列表
·库存信息管理模块
输入：库存信息（库存ID、药品ID、药品名称、批号、生产日期、进货日期、进货单价、库存数量）
处理：添加、修改、删除、搜索库存信息
输出：库存信息列表
·销售管理模块
输入：销售信息（销售ID、药品名称、客户名称、销售日期、销售数量、销售单价、销售金额）
处理：添加、搜索销售信息，更新库存信息
输出：销售信息列表
·进货信息管理模块
输入：进货单信息（进货单ID、供应商ID、供应商名称、进货日期、进货总金额、备注）
处理：添加、搜索进货单信息，更新库存信息
输出：进货单信息列表
·药品购买模块
输入：药品购买数量、购买客户ID
处理：查询库存剩余数量、检查购买数量是否合法、更新库存信息
输出：购买结果、销售信息
·药品进货模块
输入：批号、生产日期、进货日期、进货数量、备注、进货供应商ID
处理：查询进货药品的库存上限、检查购买数量是否合法、更新库存信息
输出：进货结果、进货单表

5.5安全性和完整性设计
为了保证该药品存销信息管理系统的安全性和完整性，进行了以下三个方面的设计：
（1）用户类别和权限设计
·系统需要区分不同的用户类别，如管理员、客户、供应商，并为其设置相应的权限；
·管理员具有最高权限，可以添加、修改和删除所有用户和数据，查看和搜索所有用户的销售信息和进货信息，而客户和供应商只能进行部分操作，如仅查看和修改个人的用户信息、仅查看个人的购买记录和进货记录；
·用户权限需要进行严格控制，避免越权操作和数据泄露等安全问题。
（2）主、外码和用户自定义的完整性约束
·系统需要设置主码、外码和用户自定义的完整性约束，避免数据冗余、不一致和错误等问题；
·主码用于唯一标识每条记录，外码用于关联不同表之间的数据，用户自定义的完整性约束用于根据业务需求进行数据检验和限制。例如，药品信息表中药品ID是主码，库存信息表中药品ID是外码，销售信息表中销售ID是主码，药品ID和用户ID是外码，进货单信息表中进货单ID是主码，用户ID是外码，
·可以设置用户自定义的完整性约束，如各种数量不能为负数、进货数量加上该药品的剩余数量不能超过该药品的库存上限、购买药品的数量不能超过该药品的剩余数量、各种价格均是两位小数的正数等。
（3）数据访问控制和加密
·系统需要进行数据访问控制，防止未经授权的用户访问和操作敏感数据；
·数据传输需要进行加密，避免数据在传输过程中被窃取和篡改。





























6 数据库物理设计
6.1选择建立索引
建立合适的索引有助于提高系统的查询性能，加快数据检索速度，提升系统的整体响应效率。
（1）药品管理模块：
在药品信息表中可以建立针对药品ID和药品名称的索引，以便快速根据药品ID或药品名称进行查询和检索。
（2）库存管理模块：
在库存信息表中可以建立针对库存ID、药品ID和药品名称的索引，以便快速根据库存ID、药品ID或药品名称进行查询和检索。
（3）进货管理模块：
在进货单表中可以建立针对进货单ID、用户ID和进货日期的索引，以便快速根据进货单ID、用户ID或进货日期进行查询和检索。
（4）销售管理模块：
在销售信息表中可以建立针对销售ID、药品ID、用户ID、药品名称、用户名称的索引，以便快速根据销售ID、药品ID、用户ID、药品名称或用户名称进行查询和检索。
（5）用户管理模块：
在用户信息表中可以建立针对用户ID和用户名称的索引，以便快速根据用户ID或用户名称进行查询和检索。

6.2确定数据的存放位置
（1）表空间
根据模块功能的不同，可以将相关表分别存放在不同的表空间中，例如药品管理模块的表存放在一个独立的表空间中，库存管理模块的表存放在另一个独立的表空间中，防止表之间发生冲突。
（2）数据文件和日志文件：
在条件允许的情况下，可以将数据文件和日志文件分别存储在不同的物理设备上，以提高系统的可靠性和可维护性。对于数据文件和日志文件的大小设置，可以根据预估的数据量和访问频率进行调整，在保证存储空间充足的情况下尽量减少碎片和浪费。但是由于设备上的限制，数据文件和日志文件只能将其存放在同一台设备里。

6.3确定系统配置
考虑数据库服务器的硬件配置和软件参数设置，以满足系统的性能需求。本项目使用的操作系统为Windows 10，CPU使用的是8核16线程的英特尔® 酷睿™ i7-11800H 处理器，有24M 高速缓存，睿频至高可达 4.60 GHz ，存储设备为为容量为512G的固态硬盘（SSD），内存大小为16GB，满足数据库服务器的要求





7 数据库实施
7.1创建数据库及数据库对象
（1）SQL脚本
1.create table drug_info
2.(
3.    drug_id           int auto_increment comment '药品ID，主键'
4.        primary key,
5.    drug_name         varchar(100) null comment '药品名称',
6.    manufacturer      varchar(100) null comment '生产厂家',
7.    unit              varchar(50)  null comment '单位',
8.    specification     varchar(50)  null comment '规格',
9.    stock_lower_limit int          null comment '库存下限',
10.    stock_upper_limit int          null comment '库存上限',
11.    price             int unsigned null comment '售价',
12.    drug_description  varchar(500) null comment '药品说明'
13.)
14.    comment '药品信息表';
15.
16.create table stock_info
17.(
18.    stock_id            int auto_increment comment '库存ID，主键'
19.        primary key,
20.    drug_id             int            null comment '药品ID，外键关联药品信息表',
21.    batch_number        varchar(50)    null comment '批号',
22.    production_date     date           null comment '生产日期',
23.    purchase_date       date           null comment '进货日期',
24.    purchase_unit_price decimal(10, 2) null comment '进货单价',
25.    remaining_quantity  int            null comment '剩余数量',
26.    constraint stock_info_ibfk1
27.        foreign key (drug_id) references drug_info (drug_id)
28.)
29.    comment '库存信息表';
30.
31.create table user_info
32.(
33.    user_id      int auto_increment comment '用户ID，主键'
34.        primary key,
35.    username     varchar(100) null comment '用户名称',
36.    password     varchar(100) null comment '密码',
37.    role         varchar(50)  null comment '角色',
38.    contact_info varchar(100) null comment '联系方式',
39.    address      varchar(255) null comment '地址'
40.)
41.    comment '用户信息表';
42.
43.create table purchase_order
44.(
45.    purchase_id           int auto_increment comment '进货单ID，主键'
46.        primary key,
47.    user_id               int            null comment '供应商ID，外键关联用户信息表',
48.    purchase_date         date           null comment '进货日期',
49.    purchase_total_amount decimal(10, 2) null comment '进货总金额',
50.    note                  varchar(500)   null comment '备注',
51.    constraint purchase_order___fk1
52.        foreign key (user_id) references user_info (user_id)
53.)
54.    comment '进货单表';
55.
56.create table sales_info
57.(
58.    sales_id         int auto_increment comment '销售ID，主键'
59.        primary key,
60.    drug_id          int            null comment '药品ID，外键关联药品信息表',
61.    user_id          int            null comment '客户ID，外键关联用户信息表',
62.    sales_date       date           null comment '销售日期',
63.    sales_quantity   int            null comment '销售数量',
64.    sales_unit_price decimal(10, 2) null comment '销售单价',
65.    sales_amount     decimal(10, 2) null comment '销售金额',
66.    constraint sales_info_ibfk1
67.        foreign key (drug_id) references drug_info (drug_id),
68.    constraint sales_info_ibfk_3
69.        foreign key (user_id) references user_info (user_id)
70.)
71.    comment '销售信息表';
（2）运行结果


7.2数据库备份和恢复方案
为了确保药品存销信息管理系统的数据安全性和可恢复性，以下是一个基本的数据库备份和恢复方案：
（1）数据库备份方案
·定期进行完整备份：定期备份整个数据库，包括所有表、视图、存储过程等对象和数据。
·增量备份：在完整备份之后，每日或每小时备份新增或修改的数据部分。
·日志备份：对于支持事务日志的数据库管理系统，可以进行定期的事务日志备份，以便在需要时进行逐步恢复。
·存储备份文件：将备份文件存储在安全可靠的位置，可以考虑使用云存储或离线介质（如磁带）。
（2）数据库恢复方案
·完整恢复：首先使用最新的完整备份来恢复整个数据库。
·应用增量备份：根据增量备份的时间顺序，逐个应用增量备份来恢复新增或修改的数据。
·逐步恢复：可以使用事务日志来逐步恢复数据库到指定的时间点。
·测试和验证：在生产环境之外，先在测试环境中进行恢复操作，并验证数据的完整性和准确性。
（3）额外考虑
·自动化备份和恢复：可以使用自动化工具或脚本，定期执行备份和恢复任务，以减少人工操作的错误和工作量。
·定期测试恢复：定期测试数据库恢复过程，以确保备份文件的可用性和恢复方案的有效性。
·备份监控和告警：设置监控和告警机制，及时发现备份失败或异常情况，并采取相应的措施。

7.3用户界面的设计和实现、应用程序编码
7.3.1用户界面的设计
用户界面设计是药品存销信息管理系统中非常关键的一个环节，一个好的用户界面可以提高用户的使用体验，并且增加系统的易用性。以下是该系统的用户界面设计实现：
（1）登录页面
该系统的登录页面需要用户输入用户名和密码才能进入系统，同时支持记住密码和自动登录功能。
（2）主页
系统主页展示了系统的各个功能模块，并提供了快捷导航菜单和搜索框等功能。
（3）药品信息管理页面
药品信息管理页面包括药品的基本信息、库存信息、进货信息、销售信息和价格信息等，支持药品新增、修改、删除、查询等功能。
（4）库存信息管理页面
库存信息管理页面展示了当前库存情况，包括库存数量、库存记录等信息，支持库存调整和库存盘点等功能。
（5）进货信息管理页面
进货信息管理页面展示了进货记录，包括进货日期、供应商信息、进货数量、进货价格等信息，支持进货新增、修改、删除和查询等功能。
（6）销售信息管理页面
销售信息管理页面展示了销售记录，包括销售日期、销售人员、销售数量、销售价格等信息，支持销售新增、修改、删除和查询等功能。
（7）个人信息管理页面
个人信息管理页面展示了个人用户的信息，包括用户名称、密码、联系方式、地址等，支持信息的修改、删除和查询等功能

7.3.2用户界面的实现、应用程序编码
由于本项目的代码量实在是太大了，不便于将所有源代码放置于本文档中，这里仅展示个人认为本项目中难点的实现代码，如果读者想阅读源代码，可以访问网站https://github.com/cowgoodsheep或者查询本地文件。
个人认为客户购买药品的时候，药品库存数量要随之减少这一功能实现起来是最麻烦的。首先客户购买药品时，需要检查该药品的库存数量是否足够，如果不足，则提醒购买失败，若足够，则提醒购买成功，并在库存中减少相应的数量。减少库存的时候，本人是根据药品的生产日期最早的库存开始减少，若该库存数量不够，则将其清空，并继续寻找生产日期第二早的库存并减少，以此类推，直到减到足够的数量为止。以下是具体实现的代码。 
1.   //购买药品
2.    async function executeQuery(sql) {
3.        return new Promise((resolve, reject) => {
4.          connection.query(sql, (err, result) => {
5.            if (err) {
6.              reject(err);
7.            } else {
8.              resolve(result);
9.            }
10.          });
11.        });
12.      }
13.const process = async(sales_quantity,drug_id)=>{
14. //减库存
15. let remaining_to_reduce = sales_quantity
16.    while(remaining_to_reduce>0){
17.        const sql = `SET @remaining_to_reduce = ${remaining_to_reduce};SELECT remaining_quantity INTO @temp FROM stock_info WHERE drug_id = ${drug_id} ORDER BY production_date LIMIT 1;UPDATE stock_info SET remaining_quantity = CASE WHEN remaining_quantity >= @remaining_to_reduce THEN remaining_quantity - @remaining_to_reduce ELSE 0 END WHERE drug_id = ${drug_id} ORDER BY production_date LIMIT 1; SET @remaining_to_reduce = CASE WHEN @remaining_to_reduce >= @temp THEN @remaining_to_reduce - @temp ELSE 0 END;SET foreign_key_checks = 0;DELETE FROM stock_info WHERE remaining_quantity = 0 AND drug_id = ${drug_id} LIMIT 1;SET foreign_key_checks = 1;SELECT @remaining_to_reduce;`
18.        const result = await executeQuery(sql);
19.        remaining_to_reduce = result[result.length - 1][0]['@remaining_to_reduce'];        
20.    }
21. 
22.    }
23.    const buyDrug = (drug_id, user_id, sales_quantity, sales_unit_price) => {
24.        const judgesql = `SELECT SUM(remaining_quantity) AS total_quantity FROM stock_info WHERE drug_id = ${drug_id};`
25.        return new Promise((resolve, reject) => {
26.        connection.query(judgesql,(err,result,yield)=>{
27.            if(err){
28.                reject(err)
29.            }else{
30.                if(result[0]['total_quantity']<sales_quantity){
31.                    resolve(false)
32.                }else{
33.                    const updatesql= `INSERT INTO sales_info (drug_id, user_id, sales_date, sales_quantity, sales_unit_price, sales_amount) VALUES (${drug_id},${user_id},'${getDate()}',${sales_quantity},${sales_unit_price},${sales_unit_price*sales_quantity});`
34.                        connection.query(updatesql,(err,result,yield)=>{
35.                            if(err){
36.                                reject(err)
37.                            }else{
38.                                process(sales_quantity,drug_id)
39.                                resolve(result)
40.                            }
41.                        })
42.                }
43.            }
44.        })
45.    });
46.    }

















8 系统测试方案和测试报告
8.1 简述 
为了检验上述实现方案的可行性、理论的正确性，对实现的系统进行实验检测。主要测试该系统能否正常运行。

8.2 测试环境 
    运行操作系统：Windows 10

8.3 测试过程及方法
先启动数据库系统，再启动后台服务器，之后在Web客户端页面上进行一一测试相应的功能

8.4测试结果
(1) 管理员功能测试
由于管理员角色的特殊性，在页面上注册用户时不允许选择管理员角色，想要注册管理员用户就必须在数据库中手动添加数据，这样保证了权限分配的安全性。

图8-1 限制管理员注册

图8-2 数据库手动添加管理员用户
在数据库手动创建完管理员用户后，便可正常登录。

图8-3 管理员用户密码输入错误

图8-4 管理员用户登录成功后
管理员用户修改个人信息，四项均可留空，如果是用户名或密码留空，系统将自动不更改其姓名和密码，如果是联系方式或地址留空，系统将自动更新联系方式或地址为空白。

图8-5 管理员用户修改用户信息时

图8-6 管理员用户修改用户信息后
管理员可以查看所有的用户信息，为了展示方便，这里我提前注册了5个客户账号和5个供应商账号。

图8-7 管理员用户查看所有用户信息
管理员可以对用户角色进行筛选，也可以根据用户名进行搜索。

图8-8 搜索角色为客户的用户信息
管理员可以对用户信息进行修改，修改内容除了角色都可以留空，如果是用户名或密码留空，系统将自动不更改其姓名和密码，如果是联系方式或地址留空，系统将自动更新联系方式或地址为空白。

图8-9 管理员修改用户信息时

图8-10 管理员修改用户信息后
管理员也可以删除用户信息，删除后这个用户就直接消失了。

图8-11 管理员删除用户信息
管理员删除用户信息后，该用户的信息在数据库中也会删除。

图8-12 管理员删除用户信息后的数据库
管理员可以添加药品信息，此处做出了多出限制，例如药品库存下限、药品库存上限和售价均须大于等于0、药品库存下限必须小于上限和所有信息必须填写等。

图8-13 管理员添加药品信息

图8-13 管理员添加药品信息时的限制条件
管理员可以对药品信息进行搜索，可以以药品ID作为关键字进行搜索，也可以根据药品名称作为关键字进行模糊搜索，前端会自动根据输入内容进行调整，若输入类型为整数，则进行ID搜索，若输入类型为字符串，则进行名称模糊搜索。为了方便展示效果，这里手动添加了一些药品的信息。

图8-14 管理员搜索药品信息前

图8-15 管理员搜索药品ID为4的药品信息

图8-16 管理员搜索药品名称有“止咳”的药品信息
管理员可以修改药品信息，每一项均可留空，若留空则保留修改前的信息，这里将众生丸的售价改为88。

图8-17 管理员修改药品信息时

图8-18 管理员修改药品信息后
管理员可以删除药品信息，删除某药品信息后数据库也会跟着删除，这里删除众生丸的药品信息。由于药品ID是自动递增加一的，而且为了方便同步删除该药品关联的销售信息和进货信息，删除某个药品后，被删除的ID将永远不会被使用，因为药品ID类型是INT，所以无需担心ID会被用完的情况。

图8-19 管理员删除药品信息时

图8-20 管理员删除药品信息后
管理员可以查看和搜索药品的库存信息，但是不能对其进行增加、修改和删除，因为这是客观的事实，如果想删除药品的库存，只能将该药品信息整个删掉。由于还未介绍到供应商进货的操作，对于库存信息的来源，读者可以参考图8-45、图8-46，为了介绍的方便，这里直接进行了若干进货的操作。药品的搜索可以根据库存ID 搜索或者药品名称模糊搜索。

图8-21 管理员查看库存信息

图8-22 管理员根据库存ID搜索库存信息

图8-23 管理员根据药品名称模糊搜索库存信息
管理员可以查看和搜索客户的销售信息，但是不能对其进行增加、修改和删除，因为这是客观的事实。由于还未介绍到客户购买的操作，对于销售信息的来源，读者可以参考图8-34、图8-35、图8-36，为了介绍的方便，这里直接进行了若干购买的操作。销售信息的搜索可以根据客户ID 搜索或者客户名称模糊搜索。

图8-24 管理员查看销售信息

图8-25 管理员根据客户ID搜索其销售信息

图8-26 管理员根据客户名称模糊搜索其销售信息
管理员可以查看和搜索药品的入库信息，但是不能对其进行增加、修改和删除，因为这是客观的事实。由于还未介绍到供应商进货的操作，对于进货信息的来源，读者可以参考图8-45、图8-46，为了介绍的方便，这里直接进行了若干进货的操作。进货单的搜索可以根据供应商名称模糊搜索。

图8-27 管理员查看入库信息

图8-28 管理员根据供应商名称模糊搜索入库信息

（2）客户功能测试
客户注册账号时，应在角色一栏选择客户。

图8-29 客户用户注册
客户在注册账号后，即可进行登录，登录完毕后，跳转到个人信息界面。

图8-30 客户用户登录后
客户仅可以查看个人的信息和修改个人信息。当修改个人信息是，四项均可留空，如果是用户名或密码留空，系统将自动不更改其姓名和密码，如果是联系方式或地址留空，系统将自动更新联系方式或地址为空白。

图8-31 客户修改个人信息时

图8-32 客户修改个人信息后
客户可以对药品信息进行搜索，可以以药品ID作为关键字进行搜索，也可以根据药品名称作为关键字进行模糊搜索，前端会自动根据输入内容进行调整，若输入类型为整数，则进行ID搜索，若输入类型为字符串，则进行名称模糊搜索。其效果和图8-14、图8-15、图8-16相同，这里就不做展示了。

图8-33 客户查看药品信息
客户可以指定某药品进行购买操作，首先先得在购买按钮左边输入需要购买的数量，如果输入的数字小于等于0，系统会将其自动调整为1，如果购买数量超过了该药品在库存中的剩余数量，将会提醒购买失败。购买成功后，系统会自动生成销售信息，用户可以在我的购买记录处查询自己的购买信息，并且同时减少库存中该药品的数量，从生产日期早的开始减，如果库存数量变为0，系统则自动将该库存删除，然后继续寻找下一个生产日期较晚的库存开始减少，这是一个实现难度较大的功能。

图8-34 客户购买药品时

图8-35 客户购买药品成功

图8- 36客户购买药品失败
客户仅可以查看和搜索自己的购买记录，搜索购买记录时可以根据订单号进行搜索或者药品名称进行模糊搜索。

图8-37 客户查看我的购买记录

图8-38 客户根据订单号搜索购买记录

图8-39 客户根据药品名称模糊搜索购买记录

（3）供应商功能测试
供应商注册账号时，应在角色一栏选择供应商。

图8-40 供应商用户注册
供应商在注册账号后，即可进行登录，登录完毕后，跳转到个人信息界面。

图8-41 供应商用户登录后
供应商仅可以查看个人的信息和修改个人信息。当修改个人信息是，四项均可留空，如果是用户名或密码留空，系统将自动不更改其姓名和密码，如果是联系方式或地址留空，系统将自动更新联系方式或地址为空白。

图8-42 供应商修改个人信息时

图8-43 供应商修改个人信息后
供应商可以对药品信息进行搜索，可以以药品ID作为关键字进行搜索，也可以根据药品名称作为关键字进行模糊搜索，前端会自动根据输入内容进行调整，若输入类型为整数，则进行ID搜索，若输入类型为字符串，则进行名称模糊搜索。其效果和图8-14、图8-15、图8-16相同，这里就不做展示了。

图8-44 供应商查看药品信息
供应商可以指定某药品进行进货操作，除了备注信息，其他必填，其中进货数量会根据药品的库存上限进行自动的调整，调整的数量最多为该药品的库存上限减去该药品的库存数量，最少为0，这是一个实现的难点。

图8-45 供应商进货操作时输入了过大的进货数量

图8-46 系统自动调整进货数量
供应商进货操作结束后，进货单会自动生成，进货总金额也会由系统自动算出，供应商可以在我的进货记录中查看。

图8-47 供应商查看进货单
供应商可以根据时间范围去搜索个人的进货单，这里为了方便展示，手动在数据库添加了几条进货信息。

图8-48 供应商搜索个人进货单前

图8-49 供应商搜索个人进货单时

图8-50 供应商搜索个人进货单后












9 安装和使用说明
9.1本地安装
按照规则配置本地数据库（参考数据库表），然后在后台连接数据库代码中切换为自己的数据库即可完成后台配置，然后启动后端，安装node，npm，在前端文件根目录下运行npm run dev启动前端即可

9.2服务器部署
需要一台服务器，将前端文件打包成dist，后台代码配置，部署在服务器上即可访问














10 总结与体会
药品存销信息管理系统是一款基于B/S架构的Web应用程序，通过Web浏览器作为客户端提供用户界面。该系统主要实现药品的库存管理、进货管理和销售管理等功能，并且提供了用户权限管理和数据报表统计等功能。
在设计和实现该系统的过程中，我深刻体会到了以下几点：
首先，系统需求分析是设计和实现一个好的信息管理系统的关键。在进行系统设计之前，必须明确系统所需的功能和用户需求，并能够满足现实业务需求。
其次，系统架构和技术选型也非常重要。系统的架构和技术选型需要根据实际需求选择，同时也需要考虑到系统的扩展性和可维护性。在设计和实现该系统时，我选择了由 Facebook 开发的用于构建用户界面的 JavaScript 库react框架作为开发平台，采用MySQL数据库作为数据存储，这些选择是基于其广泛应用和成熟技术的优点。
其三，用户界面设计也是影响系统使用体验的重要因素。良好的用户界面可以提高用户的使用体验，并且增加系统的易用性。在设计该系统的用户界面时，我注重了界面的美观性、易用性和功能完整性等方面，从而提高了系统的用户体验和用户满意度。
最后，我在本次项目过程中，也遇到十分多的问题和BUG。例如有以下几条：
1、修改个人信息后不会实时更新，得用户退出后重新登录才能刷新；
2、用户、供应商没有隐藏添加药品信息，导致用户和供应商可以添加药品；
3、供应商的操作中我的入库记录的根据日期搜索有误，查了好久才发现是前端传回的日期格式与数据库中的日期格式不一样；
4、药品库存小于下限时没有提醒，供应商进货时允许超过该药品库存上限，这会导致管理员忘记提醒供应商进货，也会导致供应商超量进货。
5、药品库存、销售信息、入库信息、我的购买记录、我的入库记录等时间的显示出现问题，会显示真实日期少一天，例如真实日期是2023-12-15，但网页中显示的时间是2023-12-14T16:00:00.000Z，查明原因是前端和数据库的时区没有对齐；
6、管理员在用户信息管理界面退出后，换成客户或供应商登录，会显示是用户信息管理界面，而且可以操作，修改或删除用户信息，等于拥有了管理员的部分权限。原因是管理员的缓存没有清空，解决办法是直接强制所有用户的登录后界面显示的是个人信息即可。
在开发过程中，还有许许多多、大大小小的BUG等着我就去修复。总之，设计和实现药品存销信息管理系统是一项挑战性很大的任务，需要考虑到多个因素的影响。通过这次开发经历，我学会了如何进行系统需求分析、系统架构设计和用户界面设计等方面的知识和技能，同时也深刻认识到了信息管理系统的重要性和应用需求。











