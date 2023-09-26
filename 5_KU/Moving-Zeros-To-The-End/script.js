function moveZeros(arr) {
    let arr1 = arr.filter((el) => el === 0);
    let arr2 = arr.filter((el) => el !== 0);
    return arr2.concat(arr1);
}

const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

console.log(moveZeros(arr)); // returns[false,1,1,2,1,3,"a",0,0]
