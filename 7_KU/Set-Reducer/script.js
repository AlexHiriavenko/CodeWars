function setReducer(input) {
    if (input.length === 1) {
        return input[0];
    } else {
        let counter = 1;
        const reduceArray = input.reduce((acc, next, i) => {
            if (input[i + 1] === next) {
                counter += 1;
            } else {
                acc.push(counter);
                counter = 1;
            }
            return acc;
        }, []);
        return setReducer(reduceArray);
    }
}

const input1 = [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0];

const input2 = [0, 4, 6, 8, 8, 8, 5, 5, 7];

const input3 = [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2];

const input4 = [2, 4, 4, 6, 2, 1, 1, 5, 6, 7, 8, 8, 8, 8, 9, 0, 1, 1, 5, 4, 4];

console.log(setReducer(input1)); // 13
console.log(setReducer(input2)); // 2
console.log(setReducer(input3)); // 3
console.log(setReducer(input4)); // 3
