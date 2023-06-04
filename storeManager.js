// increase all the prices in the array with the input of increase prices
const main = () => {
    var increase = 10;
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here

    const increasedElements = prices.map(i => i + increase);
    console.log(increasedElements);
};



