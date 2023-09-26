const inputData = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArray(char, min, max) {
    const array = [];
    const flag = char === "N";
    let iterations = flag ? 4 : 5;

    for (let i = 0; i < iterations; i += 1) {
        let cell = "";
        while (array.includes(cell) || cell === "") {
            cell = char + getRandomNumber(min, max);
        }
        array.push(cell);
    }
    return array;
}

function getCard() {
    const result = Object.entries(inputData).reduce(
        (accumulator, [key, val]) => {
            const [min, max] = val;
            accumulator.push(generateArray(key, min, max));
            return accumulator;
        },
        []
    );

    return result.flat();
}

console.log(getCard());

const exampleResult = [
    "B6",
    "B13",
    "B8",
    "B10",
    "B7",
    "I27",
    "I23",
    "I29",
    "I25",
    "I22",
    "N31",
    "N36",
    "N39",
    "N32",
    "G58",
    "G46",
    "G55",
    "G54",
    "G60",
    "O64",
    "O74",
    "O61",
    "O69",
    "O68",
];
