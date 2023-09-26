function spread(func, args) {
    return func(...args);
}

function add(x, y) {
    return x + y;
}

const args = [1, 2];

const result = spread(add, args);
console.log(result); // Выведет: 3
