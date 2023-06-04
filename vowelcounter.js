/* 
Write a function, countVowels(word), that takes in a string word 
and returns the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".
*/

function countVowels(word) {
   let vowelCounter = 0;
   let i = 0;

   while (i < word.length) {
    letter = word[i];

    if (letter === "a" ||
        letter === "e" || 
        letter === "i" ||
        letter === "o" ||
        letter === "u")  {
            vowelCounter += 1;
        }
    i++;
   }
     return vowelCounter;

    
}


console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2 
