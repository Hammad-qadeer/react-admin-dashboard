//call () or Function.prototype.call()

//map method
const numbers = [2,4,8,10];

const halves = numbers.map(x => x/2);

//filter

const words = ["spray", "limit", "elite", "tie", "destruction","completeness"];

const longWords = words.filter(word => word.length > 6);

console.log(longWords);

//reduce

const total = [0, 1, 2, 4].reduce((sum, value) => sum + value, 1);

console.log(total);


const arr = [1, 2, 3, 4, 5,6];

//sort in descending order
const alphabet = ["f", "a", "r", "t", "e"];

descend = arr.sort((a, b) => a > b ? -1 : 1);

console.log(descend);

//sort in ascending order

ascend = alphabet.sort((a, b) => a > b ? 1 : -1);
console.log(ascend);


const arr1 = [1,2,4];

arr1.forEach(element =>  {
    console.log(element);
})

//concat()
const arr2 = ["a", "b", "c"];
const arr3 = ["d", "e", "f"];

