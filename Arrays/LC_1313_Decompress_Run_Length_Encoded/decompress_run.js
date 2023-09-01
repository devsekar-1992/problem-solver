/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    /**Solution 1 */
    let pair_arr=[];
    let decompress_list=[];
    nums.map((value, key) => (nums[2 * key] != undefined) ? pair_arr.push([nums[2 * key], nums[2 * key + 1]]) : '');
    for (const iterator of pair_arr) {
        count=0;
        while (iterator[0]!=count) {
            decompress_list.push(iterator[1])
            count++;
        }
    }
    return decompress_list;
    /**Solution 2 */
   
   for (let i = 0; i < nums.length; i += 2) {
       const freq = nums[i];
       const val = nums[i + 1];
       
       for (let j = 0; j < freq; j++) {
           result.push(val);
       }
   }
   
   return result;

};

const nums=[1,1,2,3];
decompressRLElist(nums)