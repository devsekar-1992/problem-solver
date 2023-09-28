/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count=0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const secondNum=diff+element;
        const thirdNum=diff+secondNum;
        if(nums.includes(element) && nums.includes(secondNum) && nums.includes(thirdNum)){
            count++;
        }
    }
     return count;
};
const nums=[0,1,4,6,7,10]
const diff=3
 //let nums = [4,5,6,7,8,9], diff = 2

arithmeticTriplets(nums,diff)