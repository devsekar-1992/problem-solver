//Problem
/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */
function sumOfArray(params) {
    for (let index = 1; index < params.length; index++) {
        params[index] += params[index - 1];
    }
    return params;
}
const sum=sumOfArray([1,2,3,4]);
console.log(sum);