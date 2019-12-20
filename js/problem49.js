/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// method1  超出输出限制  为何   没排序！！！

// var groupAnagrams = function(strs) {
//   let configObj = {};
//   let strObj = {};
//   let keys = [];
//   strs.forEach(str => {
//     strObj = generateObjFromStr(str);
//     keys = Object.keys(configObj);
//     let hasKey = false;
//     console.log(strObj, configObj);
//     keys.forEach(key => {
//       if (matchObj(JSON.parse(key), strObj)) {
//         configObj[key].push(str);
//         hasKey = true;
//       }
//     });
//     if (!hasKey) {
//       configObj[JSON.stringify(strObj)] = [str];
//     }
//   });

//   return Object.values(configObj);
// };

// const generateObjFromStr = str => {
//   let resObj = {};
//   for (let i = 0; i < str.length; i++) {
//     let tag = str[i];
//     if (!resObj[tag]) {
//       resObj[tag] = 1;
//     } else {
//       resObj[tag] += 1;
//     }
//   }
//   return resObj;
// };

// const matchObj = (obj1, obj2) => {
//   return (
//     Object.keys(obj1).every(key => obj2[key] === obj1[key]) &&
//     Object.keys(obj2).every(key => obj1[key] === obj2[key])
//   );
// };

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// method 2   sort first

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// var groupAnagrams = function(strs) {
//   let resultObj = {};
//   strs.forEach(str => {
//     let sort = sortStr(str);
//     if (resultObj[sort]) {
//       resultObj[sort].push(str);
//     } else {
//       resultObj[sort] = [str];
//     }
//   });
//   return Object.values(resultObj);
// };

// const sortStr = str => {
//   let resultStr = "";
//   let strArr = str.split("");
//   while (strArr.length >= 1) {
//     let min = "";
//     let index = -1;
//     for (let i = 0; i < strArr.length; i++) {
//       if (index === -1) {
//         min = strArr[i];
//         index = i;
//       } else if (strArr[i] < min) {
//         min = strArr[i];
//         index = i;
//       }
//     }
//     resultStr += min;
//     strArr.splice(index, 1);
//   }
//   return resultStr;
// };

// method 3  hash串辨别

const groupAnagrams = function(strs) {
  let hash = new Map();
  strs.forEach(str => {
    let alpha = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      alpha[str.charCodeAt(i) - 97]++;
    }

    let hashKey = alpha.join("#");
    if (hash.has(hashKey)) {
      let temp = hash.get(hashKey);
      temp.push(str);
      hash.set(hashKey, temp);
    } else {
      hash.set(hashKey, [str]);
    }
  });
  return [...hash.values()];
};

export default groupAnagrams;
