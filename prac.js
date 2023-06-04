// 1. factorial of number 5! = 5 * 4 * 3 * 2 * 1
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

console.log(factorialize(10));

// 2. print out the length of the longest word in the string
let s = "I love lanre so much";

const total = (snum) => {
  return snum
    .split(" ")
    .reduce((longest, num) => Math.max(longest, num.length), 0);
};

console.log(total(s));

// 3. Return Largest Numbers in Arrays
let find = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

console.log(largestOfFour(find));

// 4. Confirm the Ending
function confirmEnding(str, target) {
  let end = str.slice(str.length - target.length);
  return end === target ? true : false;
}

console.log(confirmEnding("Bastian", "n"));

// 5. or Confirm the Ending with endsWith()
function confirmEnding(str, target) {
  let end = str.endsWith(target);
  return end;
}

console.log(confirmEnding("i love lanre", "lanre"));


//6.  Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let reStr = "";
  for (let i = 0; i < num; i++) {
    reStr += str;
  }
  return reStr;
}

console.log(repeatStringNumTimes("abc", 3));

// 7. trucate a String with ...
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// 8. Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// 9. Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
function findElement(arr, func) {
  return arr.find(func);
}

console.log(findElement([1, 8, 3, 4], num => num % 2 === 0));


// 10. Check if a value is classified as a boolean primitive. Return true or false
function booWho(bool) {
  return typeof bool === 'boolean' ? true : false;
}

console.log(booWho(null));

// 11 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((value) => value.replace(value.charAt(0), value.charAt(0).toUpperCase()))
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));


// 12. You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let arrays = arr2.slice();
  arrays.splice(n, 0, ...arr1);
  return arrays;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// 13. Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

// 14. Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
// once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a -b)
    .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

// Return true if the string in the first element of the array contains all of the letters
// of the string in the second element of the array.
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every((letter) => {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    })
};

console.log(mutation(["Mary", "Army"]));

// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
