/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

// removes the last vowel in a word
let removeLastVowel = function(word) {
    // Your code here
    let vowel = "aeiouAEIOU";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1, word.length);
        }
    }
};

let hipsterfy = function(sentence) {
    // Your code here
    let sentenceArray = sentence.split(" ");

    let result = sentenceArray.map(function(value) {
        return removeLastVowel(value);
    });

    return result.join(" ");
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
