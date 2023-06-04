/* Write a function doubler(numbers) that takes an array of numbers 
and returns a new array where every element of the original array is multiplied by 2.
*/

function doubler(numbers) {
    let doubledNumbers = [];

    let i = 0;
    while (i < numbers.length) {
        let oldNumbers = numbers[i];
        let newNumbers = oldNumbers * 2;
        doubledNumbers.push(newNumbers);
        i++;
    }
    return doubledNumbers;
}

console.log(doubler([1, 2, 3, 4, 5, 6])); // => [2, 4, 6, 8, 10, 12]
console.log(doubler([7, 1, 8, 9, 7, 5])); // => [14, 2, 16, 18, 14, 10]