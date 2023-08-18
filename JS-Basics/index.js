let arr = ["john", 23, null, true];

console.log(arr.shift("hello"));

//every()

const every = [1,2,3,4,5,6];


//all elements are greater then 5
const greaterFive = arr.every(num => num > 5);
console.log(greaterFive);//false

//all elements are less than 9
const lessnine = arr.every(num => num < 9);
console.log(lessnine); //true

//some()

const someArr = [1,2,3,4,6,7];


// at leaset one element is greater than 5?
const greaterNum = someArr.some(num => num > 5);
console.log(greaterNum); //true

const lessNum = someArr.some(num => num <=0);
console.log(lessNum); //false

//includes()

const includesArr = [1,2,4,5,6,7];
console.log(includesArr.includes(0)); //false 
console.log(includesArr.includes(4)); //true



