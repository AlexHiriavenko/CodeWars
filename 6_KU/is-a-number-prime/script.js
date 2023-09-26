function isPrime(n) {
    const end = Math.floor(n ** (1 / 2));
    for (let i = 2; i <= end; i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

console.log(isPrime(13)); // true
console.log(isPrime(4)); // false
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
console.log(isPrime(113)); // true
