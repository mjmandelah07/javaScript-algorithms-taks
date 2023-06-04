/* Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. 
   The function should print out numbers between min and max at step intervals. See the following examples.
   Hint: this function only needs to print using console.log it does not need to return.
*/

// Using while loop
function logBetweenStepper(min, max, step) {
    let i = min;
    while (i <= max) {
        console.log(i);
        i+=step;;
    }

}

logBetweenStepper(5, 9, 1);

// Using for loop
function logBetweenStepper(min, max, step) {
    for (let i = min; i <= max; i+=step) {
        console.log(i);
    }
}

logBetweenStepper(-10, 15, 5);