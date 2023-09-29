/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let acr='';
    words.map(v=>acr+=v.substring(0,1))
    return acr==s
};
const words = ["an","apple"], s = "a"

console.log(isAcronym(words,s))