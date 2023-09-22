/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/*
var sumIndicesWithKSetBits = function(nums, k) {
    let total=0;
    for (let index = 0; index < nums.length; index++) {
        let count=0;
        let binary=parseInt(index).toString(2);
        for (let j = 0; j < binary.split('').length; j++) {
            if( binary[j]==1){
                count++;
            }
        }
        if(count==k){
            total+=nums[index];
        }
    }
    return total;
};
*/
/**
 * Other Optimal Solution
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let total = 0;
    for (let index = 0; index < nums.length; index++) {
        let count = 0;
        let n = index;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        console.log(count,index,k);
        if (count === k) {
            total += nums[index];
        }
    }
    return total;
};

let nums = [4,3,2,1], k = 2
sumIndicesWithKSetBits(nums,k)
