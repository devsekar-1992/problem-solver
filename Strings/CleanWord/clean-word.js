// PROBLEM
/**
 * Clean Words Given a string s, return the longest clean word in s. A clean word is a word where every character in it exists in both uppercase and lowercase. If multiple clean words are found, return the first occurrence. If none are found, return an empty string. 
 * Example: Input: s = "NatbBbyn" Output: "bBb" Constraints: • 1 ​
 *  */ 

function longestCleanWord(s) {
  let longestWord = '';
  let currentWord = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (s.includes(char.toLowerCase()) && s.includes(char.toUpperCase())) {
      currentWord += char;
      
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    } else {
      currentWord = '';
    }
  }
  
  return longestWord;
}

const s = "abAcB";
const result = longestCleanWord(s);
console.log(result); // Output: "bBb"
