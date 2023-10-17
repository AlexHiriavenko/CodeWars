function getNumbers(numbers, target) {
    numbers = numbers.filter((num) => num <= target);

    function findNumbers(target, index) {
        // базовый случай
        if (target === 0) {
            return [];
        }

        for (let i = index; i < numbers.length; i++) {
            const num = numbers[i];
            console.log(`numbers[]i: ${num}`);
            // Проверяем каждое число num. Если num меньше или равно текущему target,
            // функция пытается найти комбинацию для target - num начиная с индекса i.
            if (num <= target) {
                // Здесь функция вызывает саму себя рекурсивно с новым target - num и индексом i.
                // Это означает, что она пытается найти комбинацию чисел,
                // которые дадут оставшуюся сумму target - num.
                // Результат сохраняется в remainderNumbers.
                const remainderNumbers = findNumbers(target - num, i);
                console.log(`target - num: ${target - num}`);
                console.log(remainderNumbers);
                if (remainderNumbers !== null) {
                    return [num, ...remainderNumbers];
                }
            }
        }

        return null;
    }

    const result = findNumbers(target, 0);
    return result !== null ? result : [];
}

const numbers = [100, 25, 15, 7, 3];
// console.log(getNumbers(numbers, 24)); // Output: [15, 3, 3, 3]
console.log(getNumbers(numbers, 53)); // Output: [25, 25, 3]
// console.log(getNumbers(numbers, 35)); // Output: [25, 7, 3]
// console.log(getNumbers(numbers, 4)); // Output: []
