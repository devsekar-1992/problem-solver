/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArray=[];
    index.map((v,i)=>targetArray.splice(index[i],0,nums[i]));
    return targetArray;
};
const input=[1];
const index=[0];
createTargetArray(input,index);