/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let arr = (x+'').split('')
  let res = 0
  if(arr.indexOf('-')==0){
    res = ~~('-' + arr.slice(1).reverse().join(''))
    return res<-65535?0:res
  }
  res = ~~arr.reverse().join('')
  return res>65535?0:res
};