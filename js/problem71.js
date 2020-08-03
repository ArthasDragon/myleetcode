/**
 * @param {string} path
 * @return {string}
 */

//  思路：用 / 分离路径字符串  然后遍历数组
var simplifyPath = function(path) {
  // 转化成不包含空字符串的数组
  let pathArr = path.split("/").filter(item => item !== "");

  let currentStr = pathArr.shift(); // 当前路径标识
  let pathStack = []; // 路径栈

  // 取路径标识  直到pathArr中没有路径为止
  while (currentStr) {
    // 如果当前是. 继续循环
    if (currentStr === ".") {
      currentStr = pathArr.shift();
      continue;
    }
    // 如果当前是.. 将路径栈中上一个路径移除
    if (currentStr === "..") {
      pathStack.pop();
    } else {
      // 将当前路径加入路径栈中
      pathStack.push(currentStr);
    }
    // 取下一个路径标识
    currentStr = pathArr.shift();
  }
  // 返回路径栈中的值
  return "/" + pathStack.join("/");
};

export default simplifyPath;
