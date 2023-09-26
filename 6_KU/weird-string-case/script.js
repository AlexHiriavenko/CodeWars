const str = "Weird string case";

function toWeirdCase(str) {
    let result = "";
    let end = str.length;
    let flag = false;

    for (let i = 0; i < end; i++) {
        flag = !flag;
        if (str[i] === " ") {
            flag = false;
        }
        result += flag ? str[i].toUpperCase() : str[i];
    }

    return result;
}

console.log(toWeirdCase(str)); // WeIrD StRiNg CaSe
