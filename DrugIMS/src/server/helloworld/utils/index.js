const getDate = () => {
    // 创建一个日期对象
let now = new Date();

// 获取当前年份、月份和日期
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

// 将年份、月份和日期拼接成字符串，格式为 YYYY-MM-DD
let dateString = `${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
return dateString
}

module.exports = {
    getDate
}