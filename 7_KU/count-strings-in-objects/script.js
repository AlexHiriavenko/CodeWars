const testObj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, "one more", 4, [1, "one more"]],
    fifth: null,
};

function strCount(obj, count = 0) {
    if (typeof obj === "string") {
        count += 1;
    } else if ((typeof obj === "object") & (obj !== null)) {
        for (const key in obj) {
            count = strCount(obj[key], count);
        }
    }
    return count;
}

console.log(strCount(testObj)); // 5
