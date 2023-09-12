/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let rulesList=[
        'type',
        'color',
        'name'
    ];
    let ruleKeyIndex=rulesList.indexOf(ruleKey);
    return items.filter((data)=>data[ruleKeyIndex]===ruleValue).length;
};
let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone";
console.log(countMatches(items,ruleKey,ruleValue));