/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count=0;
    for (let index = 0; index < nums.length; index++) {
        for (let j = index+1; j < nums.length; j++) {
            if(Math.abs(nums[index]-nums[j])==k){
                count++;
            }
        }
    }
    return count;
};
const nums = [1,2,2,1], k = 1
//Output: 3

countKDifference(nums,k)
