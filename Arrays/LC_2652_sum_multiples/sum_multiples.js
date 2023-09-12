/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let sum=0;
    for (let index = 1; index <=n; index++) {
        if(Math.trunc(index%3)==0 || Math.trunc(index%5)==0 || Math.trunc(index%7)==0){
            sum=sum+index;
        }
    }
    return sum;
};
const n=9;
sumOfMultiples(n)