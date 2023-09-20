/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count=0
    for (let i = 0; i < nums.length-1; i++) {
        const elementI = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const elementJ = nums[j];
            if((elementI+elementJ)<target){
                count++;
            }
        }
    }
    return count;
};
const nums=[-6,2,5,-2,-7,-1,3];
const target=-2
console.log(countPairs(nums,target));