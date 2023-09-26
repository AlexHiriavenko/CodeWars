// converting the slope of the hour hand in degrees to the time format "hours:minutes"

var whatTimeIsIt = function (angle) {
    if (angle < 0 || angle > 360) {
        return "invalid input data";
    }

    let hour = Math.floor(angle / 30),
        minutes = Math.floor((angle % 30) * 2);
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (hour <= 0) {
        hour = 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hour + ":" + minutes;
};

console.log(whatTimeIsIt(90)); // 03:00
console.log(whatTimeIsIt(330)); // 11:00
console.log(whatTimeIsIt(183)); // 06:06
console.log(whatTimeIsIt(15)); // 12:30
console.log(whatTimeIsIt(3.33)); // 12:06
console.log(whatTimeIsIt(247)); // 08:14
console.log(whatTimeIsIt(0)); // 12:00
console.log(whatTimeIsIt(359)); // 11:58
