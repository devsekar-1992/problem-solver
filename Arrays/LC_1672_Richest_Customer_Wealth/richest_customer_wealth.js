/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxArr = [];
    for (const iterator of accounts) {
        maxArr.push(iterator.reduce((x,y)=>x+y,0));
    }
    return Math.max(...maxArr);
};
// const accounts = [[1,2,3],[3,2,1]]
const accounts = [[1,5],[7,3],[3,5]]


console.log(maximumWealth(accounts))