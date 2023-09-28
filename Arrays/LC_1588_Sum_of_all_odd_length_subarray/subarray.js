/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result=0
    for (let index = 0; index < arr.length; index++) {
        for (let j = index; j < arr.length; j+=2) {
            for (let k = index; k <=j; k++) {
                result+= arr[k];
                console.log(arr[k]);
            }
        }
    }
    console.log(result);
};
const arr = [6,9,14,5,3,8,7,12,13,1]
const Output=878
console.log(sumOddLengthSubarrays(arr))
