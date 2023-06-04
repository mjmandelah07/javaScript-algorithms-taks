/* Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. 
 *Inclusive means that the range includes lowNum and highNum.
 * Hint: this function only needs to print using console.log it does not need to return.
 */

 // Using while loop
 function logBetween(lowNum, highNum) {
    let i = lowNum;

    while (i < highNum) {
        console.log(i);
        i++;
    }

 }

 logBetween(10, 20);


 // Using for loop
 function logBetween(lowNum, highNum) {
    for(i = lowNum; i < highNum; i++) {
        console.log(i);
    }
}

logBetween(20, 31);

