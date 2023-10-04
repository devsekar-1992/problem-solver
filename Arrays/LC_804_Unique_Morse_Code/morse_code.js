/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    // Morse Code Array
    const morseCode=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];    
    let data=new Set();
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        let code='';
        code=element.split('').map(v=>morseCode[alphabet.indexOf(v.toUpperCase())]).join('')
        data.add(code)
    }
    return data.size
};
const words = ["gin","zen","gig","msg"]
//const words=["a"]
 //const words=["rwjje","aittjje","auyyn","lqtktn","lmjwn"]
const output=2;

console.log(uniqueMorseRepresentations(words));