/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count=0;
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        let code=element.split('').filter(v=>allowed.indexOf(v)!=-1).length
        if(code==element.length){
            count++;
        }
    }
    return count;
};
//Optimize solution
/*
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);

    let count = 0;
    for (const word of words) {
        let consistent = true;
        for (const char of word) {
            if (!allowedSet.has(char)) {
                consistent = false;
                break;
            }
        }
        if (consistent) {
            count++;
        }
    }

    return count;
};
*/
//let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

//Output: 2



//let allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
//Output: 7

let allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
//Output: 4


countConsistentStrings(allowed,words);
