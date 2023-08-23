/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const leftSumsArray = [...nums];
    const rightSumsArray= [...nums];
    leftSumsArray.unshift(0);
    leftSumsArray.pop();
    let element=0;
    let leftSum=[];
    let rightSum=[];
    for (let index = 0; index < leftSumsArray.length; index++) {
        element = leftSumsArray[index]+element;
        leftSum.push(element);
    }
    rightSumsArray.shift();
    rightSumsArray.push(0);
    element=0;
    for (let index = rightSumsArray.length-1; index >=0; index--) {
        element = rightSumsArray[index]+element;
        rightSum[index]=element;
    }
    const data=leftSum.map((value,index)=>Math.abs(value-rightSum[index]));
    return data;
};
const input = [[10,4,8,3],[1]];
for (const key in input) {
    leftRightDifference(input[key]);    
}
