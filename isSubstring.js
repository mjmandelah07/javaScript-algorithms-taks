/* Write a function isSubstring that takes in two strings, searchString and subString.
 *The function should return true if subString is a part of thesearchString,
 *regardless of upper or lower case, and false if otherwise.
 */

 function isSubstring(searchString, subString) {
    let searchStringLower = searchString.toLowerCase();
    let subStringLower = subString.toLowerCase();
    let result = searchStringLower.indexOf(subStringLower);
    if (result === -1) {
        return false;
    }else {
        return true;
    }

}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
