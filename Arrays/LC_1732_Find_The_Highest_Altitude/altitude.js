/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum=[]
    sum[0]=0
    sum[1]=gain[0]
    
    for (let i = 1; i <= gain.length; i++) {
        let prev=sum[i-1];
        sum[i]= prev+gain[i-1];   
    }
    return Math.max(...sum);
};
//const gain = [-5,1,5,0,-7]
const gain = [-4,-3,-2,-1,4,3,2]
//const gain=[52,-91,72]
//Output: 1
//Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
console.log(largestAltitude(gain));