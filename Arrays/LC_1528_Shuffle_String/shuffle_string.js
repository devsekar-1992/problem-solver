/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str=[]
    for (let index = 0; index < indices.length; index++) {
        str[indices[index]]=s[index]
    }
    return str.join("");
};

let str='codeleet'
let indices=[4,5,6,7,0,2,1,3]
restoreString(str,indices)