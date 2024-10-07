// task: https://www.codewars.com/kata/51e056fe544cf36c410000fb;

// function topThreeWords(text) {
//   //  регулярное выражение, которое ищет последовательности букв (от 'a' до 'z')
//   // и допускает наличие апострофов внутри или в начале / конце слов.
//   // Пример: won't, abc', a'bc.

//   let words = text.toLowerCase().match(/([a-z]+'?[a-z']*)/g);
//   if (!words) return [];

//   let wordCount = {};

//   words.forEach(function (word) {
//     wordCount[word] = (wordCount[word] || 0) + 1;
//   });

//   let sortedWords = Object.keys(wordCount)
//     .sort(function (a, b) {
//       return wordCount[b] - wordCount[a];
//     })
//     .slice(0, 3);

//   return sortedWords;
// }

// function topThreeWords(text) {
//   const occurences = text
//     .toLowerCase()
//     .replace(/[^\w\s']/g, " ") // Заменяем все символы, кроме букв, пробелов и апострофов, на пробелы
//     .split(/\s+/) // Разбиваем текст на массив слов по пробелам
//     .filter((w) => w) // Убираем пустые строки
//     .filter((w) => w !== "'") // Убираем одиночные апострофы
//     .reduce((acc, v) => {
//       acc[v] = (acc[v] || 0) + 1; // Подсчитываем количество каждого слова
//       return acc;
//     }, {});

//   return Object.entries(occurences) // Преобразуем объект в массив [слово, количество]
//     .sort((a, b) => b[1] - a[1]) // Сортируем по количеству вхождений
//     .map((c) => c[0]) // Оставляем только слова
//     .slice(0, 3); // Берём топ-3
// }

function topThreeWords(text) {
  const occurrences = {};
  let word = "";

  // Проход по каждому символу строки
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();

    // Если это буква или апостроф, добавляем в слово
    if (/[a-z']/i.test(char)) {
      word += char;
    } else if (word && word !== "'") {
      // Если встречаем пробел или другой разделитель, обновляем счётчик вхождений
      occurrences[word] = (occurrences[word] || 0) + 1;
      word = ""; // Обнуляем текущее слово
    }
  }

  // Добавляем последнее слово в счётчик вхождений, если оно есть
  if (word && word !== "'") {
    occurrences[word] = (occurrences[word] || 0) + 1;
  }

  // Используем массив для хранения топ-3 слов
  const topWords = [];

  // Проход по объекту occurrences
  for (const [key, value] of Object.entries(occurrences)) {
    // Добавляем слово в массив топ-3, если он еще не полный
    if (topWords.length < 3) {
      topWords.push([key, value]);
      topWords.sort((a, b) => b[1] - a[1]); // Сортируем только топ-3
    } else {
      // Если новое слово имеет больше вхождений, чем наименьшее в топ-3, заменяем его
      if (value > topWords[2][1]) {
        topWords[2] = [key, value];
        topWords.sort((a, b) => b[1] - a[1]); // Сортируем только топ-3
      }
    }
  }

  // Возвращаем только слова из topWords
  return topWords.map((entry) => entry[0]);
}

// check

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // [ 'e', 'd', 'a' ]
console.log(topThreeWords("a a a c b b")); // [ 'a', 'b', 'c' ]
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
); // [ 'e', 'ddd', 'aa' ]
console.log(topThreeWords("  //wont won't won't ")); // [ 'won't', 'wont' ]
console.log(topThreeWords("  , e   .. ")); // [ 'e' ]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []
console.log(
  topThreeWords(
    `In a village of La Mancha, the name of which I have no desire to call to
   mind, there lived not long since one of those gentlemen that keep a lance
   in the lance-rack, an old buckler, a lean hack, and a greyhound for
   coursing. An olla of rather more beef than mutton, a salad on most
   nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
   on Sundays, made away with three-quarters of his income.`
  )
); // [ 'a', 'of', 'on' ]
