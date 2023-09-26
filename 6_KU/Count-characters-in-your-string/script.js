const str = "Count characters in your string";

function count(string) {
    return string.split("").reduce((obj, key) => {
        obj[key] = (obj[key] || 0) + 1;
        return obj;
    }, {});
}

console.log(count(str));

const exampleResult = {
    C: 1,
    o: 2,
    u: 2,
    n: 3,
    t: 3,
    " ": 4,
    c: 2,
    h: 1,
    a: 2,
    r: 4,
    e: 1,
    s: 2,
    i: 2,
    y: 1,
    g: 1,
};
