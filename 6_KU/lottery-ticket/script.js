const ex1 = [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
];

const ex2 = [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
];

const ex3 = [
    ["DAWLKI", 66],
    ["IRXLQHA", 88],
    ["TDCAP", 80],
];

function bingo(ticket, win) {
    const check = ticket.reduce((acc, [chars, charCode]) => {
        acc += chars.includes(String.fromCharCode(charCode)) ? 1 : 0;
        return acc;
    }, 0);
    return check >= win ? "Winner!" : "Loser!";
}

console.log(bingo(ex1, 1)); // Winner!
console.log(bingo(ex1, 2)); // Loser!
console.log(bingo(ex2, 1)); // Winner!
console.log(bingo(ex2, 2)); // Loser!
console.log(bingo(ex3, 1)); // Winner!
console.log(bingo(ex3, 2)); // Winner!
