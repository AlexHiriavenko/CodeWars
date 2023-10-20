const tuple = [45, 120];

function reduce(fraction) {
    const [numerator, denominator] = fraction;

    const dividers = [];

    for (let i = 2; i <= numerator; i += 1) {
        if (numerator % i === 0 && denominator % i === 0) {
            dividers.push(i);
        }
    }

    if (dividers.length === 0) {
        return fraction;
    } else {
        const divider = Math.max(...dividers);
        return [numerator / divider, denominator / divider];
    }
}

console.log(reduce(tuple));

///////////////////

const gcd = (a, b) => (b ? gcd(b, a % b) : a); // [3, 8]

function reduce2(fraction) {
    const divisor = gcd(...fraction);
    return fraction.map((term) => term / divisor);
}

console.log(reduce2(tuple)); // [3, 8]
