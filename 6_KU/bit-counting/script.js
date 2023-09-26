var countBits = function (n) {
    return n.toString(2).replaceAll("0", "").length;
};

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

console.log(countBits(1234)); // 5
