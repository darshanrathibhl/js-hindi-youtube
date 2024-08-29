const num=4000;
console.log(num);

const num1=new Number(1000)
console.log(num1);

// console.log(num1.toString().length);
// console.log(num1.toFixed(2));

const otherNumber=23.565
console.log(otherNumber.toPrecision(2));

const hundreds=10000000;
console.log(hundreds.toLocaleString('en-In'));          // Indian standard me ho jata h conversion


////////////////////    Maths      //////////////////////////////
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.round(3.69));
// console.log(Math.abs(-89));
console.log(Math.round(Math.random()));

// Math.random()   hamesha value 0 se 1 k bich me hi dega
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)