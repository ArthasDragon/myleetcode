/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  let digs = digits;
  if (!digs.length) {
    return [];
  }
  let dig_zis = {};
  dig_zis["2"] = "abc";
  dig_zis["3"] = "def";
  dig_zis["4"] = "ghi";
  dig_zis["5"] = "jkl";
  dig_zis["6"] = "mno";
  dig_zis["7"] = "pqrs";
  dig_zis["8"] = "tuv";
  dig_zis["9"] = "wxyz";
  return makezimus(dig_zis, digs);
};

let makezimus = function(dig_zis, digs) {
  if (digs.length === 1) {
    return dig_zis[digs[0]].split("");
  }
  let ds = digs.split("");
  let first = ds.shift();
  ds = ds.join("");
  return [].concat.apply(
    [],
    dig_zis[first + ""].split("").map(dig => {
      return makezimus(dig_zis, ds).map(di => {
        return dig + "" + di;
      });
    })
  );
};
