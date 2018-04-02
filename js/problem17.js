/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let digs = digits.split('')
    if(!digs.length){return ''}
    let dig_zis = {}
    dig_zis['2'] = 'abc'
    dig_zis['3'] = 'def'
    dig_zis['4'] = 'ghi'
    dig_zis['5'] = 'jkl'
    dig_zis['6'] = 'mno'
    dig_zis['7'] = 'pqrs'
    dig_zis['8'] = 'tuv'
    dig_zis['9'] = 'wxyz'
    digs.map(dig => {
        let curr = ''
        dig_zis[dig]
    })
    return makezimus(dig_zis,digs)
};

var makezimus = function (dig_zis,digs) {
    if(digs.length===1){
        return dig_zis[digs[0]].split('')
    }
    var ds = digs
    var first = ds.shift()
    console.log(first,dig_zis[first],ds)
    return (dig_zis[first+''].split('').map(dig => {
        return makezimus(dig_zis,ds).map(di => {return (dig+''+di)})
    }))
};
console.log(letterCombinations('23555'))