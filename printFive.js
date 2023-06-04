/* Write a function printFives(max) that prints out the multiples of 5 that are less than the max.

Try to solve this in two ways, one using an if statement, and one without.
*/

// using for loop and if statement
function printFives(max) {
    for (i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }

}

printFives(10);


// Using while loop and if statement
function print_Fives(max) {
    let i = 10;
    while (i < max) {
        if (i % 5 === 0) {
            console.log(i);
        }
        i++;
    }

}

print_Fives(20);



// loop without if 
function printFive_s(max) {
    for (i = 20; i < max; i+=5) {
        console.log(i);
    }
}

printFive_s(30);