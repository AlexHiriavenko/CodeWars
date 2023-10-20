function mygcd(x, y) {
    return y ? mygcd(y, x % y) : x;
}

console.log(mygcd(30, 12)); // 6
console.log(mygcd(12, 30)); // 6
console.log(mygcd(8, 9)); // 1
