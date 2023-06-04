/* Define a function fizzBuzz(max) that takes a number 
   and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, 
   but not both.
*/

// Define a function fizzBuzz 
function fizzBuzz(max) {
    // using for loop to iterate through the array
    for (i = 0; i < max; i++) {
        // if i is divisible by 3  and not divisible by 5 print the number
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
            // if i is divisible by 5 and not divisible by 3 print the number   
        }else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }

    }

}

fizzBuzz(20);

