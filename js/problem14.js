/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length){
    let first = strs[0]
    for(var i =0,len=first.length;i<len;i++){
      if(!strs.every(str => str.startsWith(first.substring(0,i+1)))){
        return first.substring(0,i)
      }
    }
    return first
  }
  return ''
};