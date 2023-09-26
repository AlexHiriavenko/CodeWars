function whoseBicycle(diary1, diary2, diary3) {
    const resObj = {
        son1: { grade: calcGrades(diary1), age: 14, name: "first" },
        son2: { grade: calcGrades(diary2), age: 9, name: "second" },
        son3: { grade: calcGrades(diary3), age: 8, name: "third" },
    };

    const sorted = Object.values(resObj).sort((a, b) => {
        if (a.grade !== b.grade) {
            return b.grade - a.grade;
        } else {
            return a.age - b.age;
        }
    });

    Object.keys(resObj).forEach((key, index) => {
        resObj[key] = sorted[index];
    });

    const best = Object.values(resObj)[0].name;
    return `I need to buy a bicycle for my ${best} son.`;
}

function calcGrades(diary) {
    return Object.values(diary).reduce((acc, next) => (acc += next));
}

const d1 = {
    algebra: 6,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
};
const d2 = {
    algebra: 8,
    history: 7,
    physics: 8,
    geography: 9,
    chemistry: 10,
};
const d3 = {
    algebra: 6,
    history: 5,
    physics: 5,
    geography: 9,
    chemistry: 10,
};

console.log(whoseBicycle(d1, d2, d3)); // "I need to buy a bicycle for my second son".
