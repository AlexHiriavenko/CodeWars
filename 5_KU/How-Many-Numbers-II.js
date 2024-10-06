// task: https://www.codewars.com/kata/55f5efd21ad2b48895000040

// solution:

function maxSumDig(nMax, maxSum) {
  // Если maxSum = 0 или nMax < 1000, сразу возвращаем результат
  if (maxSum === 0 || nMax < 1000) {
    return [0, 0, 0];
  }

  const sequenceLength = 4; // Длина последовательности цифр для суммирования
  const validNumbers = []; // Массив для хранения подходящих чисел

  // Проверяем каждое число от 1000 до nMax
  for (let i = 1000; i <= nMax; i += 1) {
    const digits = i.toString().split("").map(Number); // Разбиваем число на цифры

    // Оптимизация: проверяем первые цифры до выполнения основного цикла
    // Если первая цифра уже больше maxSum, можно пропустить число
    if (digits[0] > maxSum) {
      continue;
    }

    // Проверяем сумму первых 2 цифр
    if (digits[0] + digits[1] > maxSum) {
      continue;
    }

    // Проверяем суммы последовательных 4-х цифр
    let valid = true;
    for (let j = 0; j <= digits.length - sequenceLength; j += 1) {
      const sum = digits
        .slice(j, j + sequenceLength)
        .reduce((acc, num) => acc + num, 0); // сумма чисел массива
      if (sum > maxSum) {
        valid = false;
        break;
      }
    }

    // Если число прошло проверку, добавляем его в массив
    if (valid) {
      validNumbers.push(i);
    }
  }

  // (1) Количество чисел
  const count = validNumbers.length;

  // Если не найдено подходящих чисел
  if (count === 0) {
    return [0, 0, 0];
  }

  // (3) Сумма всех чисел
  const totalSum = validNumbers.reduce((acc, num) => acc + num, 0);
  // (2) Найти число, ближайшее к среднему значению
  const average = totalSum / count;
  let closest = validNumbers[0];

  validNumbers.forEach((num) => {
    if (Math.abs(num - average) < Math.abs(closest - average)) {
      closest = num;
    } else if (
      Math.abs(num - average) === Math.abs(closest - average) &&
      num < closest
    ) {
      closest = num;
    }
  });

  return [count, closest, totalSum];
}

console.log(maxSumDig(2000, 3)); // Ожидаемый результат: [11, 1110, 12555]
console.log(maxSumDig(2000, 4)); // Ожидаемый результат: [21, 1120, 23665]
console.log(maxSumDig(2000, 7)); // Ожидаемый результат: [85, 1200, 99986]
console.log(maxSumDig(3000, 7)); // Ожидаемый результат: [141, 1600, 220756]
