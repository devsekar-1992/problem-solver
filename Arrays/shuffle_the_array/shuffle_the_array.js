/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const first=nums.slice(0,n);
    const last=nums.slice(n);
    const arr=[];
    for (let index = 0; index < n; index++) {
        arr.push(first[index]);
        arr.push(last[index]);
    }
    return arr;
};
shuffle([1,2,3,4,4,3,2,1],4);