/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter(hour=>hour>=target).length;
};
const input=[5,1,4,2,2];
const target=6;
numberOfEmployeesWhoMetTarget(input,target);
/**
 * Alternate solution
 */
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let x = 0;
    hours.forEach((i) => {
        if(i >= target) x++;
    })
    return x;
};