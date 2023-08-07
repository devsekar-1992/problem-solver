/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newIndex=[];
    for (let index = 0; index < nums.length; index++) {
        let count=0;
        const elementI = nums[index];
        for (let j = 0; j < nums.length; j++) {
            const elementJ = nums[j];
            if (elementI>elementJ) {
                count++;
            }
        }
        newIndex.push(count);
    }
    return newIndex;
};
console.time();
const input= [7,7,7,7];
smallerNumbersThanCurrent(input);
console.timeEnd();