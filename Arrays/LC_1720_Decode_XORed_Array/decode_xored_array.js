/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr=[first];
    for (const key of encoded) {
        console.log(arr[key-1]);
        arr.push(arr[arr.length-1]^key);
    }
    return arr
};
const input=[6,2,7,3];
const first=4;
console.log(decode(input,first));
