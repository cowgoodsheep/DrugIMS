import Mock from 'mockjs'
let data = Mock.mock({
    "data|16": [ //生成6条数据 数组
        {
            "ID|+1": 1,//生成商品id，自增1
            "username": "@cname(10)", //生成商品信息，长度为10个汉字
            "gongsi": "@cname",//生成商品名 ， 都是中国人的名字
            "people": "@cname",//生成商品名 ， 都是中国人的名字,
            "phone": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "email": "@email", //随机生成地址
            "all|1-30": 1, 
            "had|1-30": 1, 
            // "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            // "food|2": [ //每个商品中再随机生成2个food
            //     {
            //         "foodName": "@cname", //food的名字
            //         "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
            //         "foodPrice|1-100": 20,//生成1-100的随机数
            //         "aname|2": [
            //             { 
            //                 "aname": "@cname", 
            //                 "aprice|30-60": 20 
            //             }
            //         ]
            //     }
            // ]
        }
    ]
})
Mock.mock(/goods\/goodAll/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return data
})
