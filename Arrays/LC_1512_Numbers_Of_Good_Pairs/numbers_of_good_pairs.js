/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let identicalPairs = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        for (let j = index+1; j < nums.length; j++) {
           if(element==nums[j]){
            identicalPairs++;
           }
        }
    }
    return identicalPairs;
};

numIdenticalPairs([1,2,3]);