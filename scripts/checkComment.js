const fs = require("fs");

//文件路径
const filePath = process.argv[2];

//只对js文件夹下的文件进行校验
if (!/\/js\//.test(filePath)) {
  process.exit();
}

//获取单行注释的正则
const singleCommentReg = /\/\/.*/g;

//获取多行注释的正则
const multiCommentReg = /\/\*[\s\S]*?\*\//g;

//获取文件内容的字符串表示
const data = fs.readFileSync(filePath, "utf-8");

//获取匹配后的单行、多行注释数组
const singleComment = data.match(singleCommentReg) || [];
const multiComment = data.match(multiCommentReg) || [];

//所有注释的字符创总长度
const commontLength =
  singleComment.reduce((pre, next) => {
    return pre + next.length;
  }, 0) +
  multiComment.reduce((pre, next) => {
    return pre + next.length;
  }, 0);

if (commontLength < data.length / 20) {
  throw new Error(`${filePath}：注释不能少于1/20`);
}