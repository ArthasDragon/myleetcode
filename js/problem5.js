/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let str = s.split(''),len = 0,result='',curr=''
  let getTwowayLong = function (i) {
    let pre = i-1,next = i+1,sum1=1,sum2=0,curr1='',curr2='',pre1=i-1,next1=i+2
    while(str[pre] && str[next] && str[pre]==str[next]){
      sum1+=2
      pre--
      next++
      curr1=s.slice(pre+1,next)
    }
    if(str[i+1]&&str[i]==str[i+1]){
      sum2 = 2
      curr2 = s.slice(i,i+2)
      while (str[pre1]&&str[next1]&&str[pre1]==str[next1]){
        sum2+=2
        curr2=s.slice(pre1,next1+1)
        pre1--
        next1++
      }
    }
    if(sum1!=1 || sum2!=0){
      if(sum1>sum2){
        curr = curr1
        return sum1
      }else {
        curr = curr2
        return sum2
      }
    }
    return 0
  }
  str.map((item,index)=>{
    let cur_len = getTwowayLong(index)
    if(cur_len&&cur_len>len){
      len = cur_len
      result = curr
    }
  })
  return len==0?str[0]:result
};