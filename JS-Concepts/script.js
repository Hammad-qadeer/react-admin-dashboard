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