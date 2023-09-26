function palindrome(string) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isNaS = (char) =>
        numbers.includes(+char) && char !== " "
            ? false
            : char.toUpperCase() === char.toLowerCase();

    const newStr = string
        .split("")
        .filter((char) => !isNaS(char))
        .join("")
        .toLowerCase();
    const revStr = newStr.split("").reverse().join("");
    console.log(newStr);
    console.log(revStr);
    return newStr === revStr;
}

// "Amore, Roma" => valid
// "A man, a plan, a canal: Panama" => valid
// "No 'x' in 'Nixon'" => valid
// "Abba Zabba, you're my only friend" => invalid

console.log(palindrome("Amore, Roma"));
console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome("No 'x' in 'Nixon'"));
console.log(palindrome("Abba Zabba, you're my only friend"));
