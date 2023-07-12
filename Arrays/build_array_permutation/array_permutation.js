/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = nums.map(num=>nums[num]);
    return ans;
}
buildArray([5,0,1,2,3,4]);