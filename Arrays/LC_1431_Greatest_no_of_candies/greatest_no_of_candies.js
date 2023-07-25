/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const booleanArr = [];
    const maxNumber = Math.max(...candies);
    return candies.map(x=>x + extraCandies >=maxNumber)
    
};
console.log(kidsWithCandies([4,2,1,1,2],1));