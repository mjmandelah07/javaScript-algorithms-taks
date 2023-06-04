let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
// get btw monday to sunday
const getWeekDay = (year, month, day) => {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // get the day of the week from the current date
    var day = d.getDay(year, month, day);
    return names[day]
};
console.log("Today is", getWeekDay(year, month, day));

// get the current date and time
const currentDate = () => {
    console.log(`Today is ${day} ${month}, ${year} and the time is ${hour}:${minute}:${second}`);
};

setInterval(currentDate, 10000);
