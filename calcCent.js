 // Create a function that returns the century depending on the year given as a parameter.

 function calcCent(year){
    let givenYear = year/100;
    // math.celi rounds up and returns the smaller integer greater than or equal to a given number.
    let roundgivenYear = Math.ceil(givenYear);
    return roundgivenYear;
 }

 // call the function
 console.log(calcCent(1656));
 console.log(calcCent(1992));
 console.log(calcCent(1896));
