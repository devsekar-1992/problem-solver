/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum_of_digit=0
    let sum_of_element=0
    nums.forEach((v,index)=>{
        sum_of_element+=v;
        /**
         * Sum of digit alternative method
         *  while (num >= 10) {
            remainderDigit = num % 10
            digitSum += remainderDigit
            num = (num - remainderDigit) / 10
            }digitSum += num
         * 
         */
            while (v >= 10) {
                remainderDigit = v % 10
                sum_of_digit += remainderDigit
                v = (v - remainderDigit) / 10
            }
            sum_of_digit += v
    });
    
    return Math.abs(sum_of_element-sum_of_digit);
    
};
let nums = [1,15,6,3]
differenceOfSum(nums)
