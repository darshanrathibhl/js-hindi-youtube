const myArr=[0,1,2,3,4,5];
// console.log(myArr.length);

myArr.push(66)
// console.log(myArr);

myArr.pop();
// console.log(myArr);

myArr.unshift(99)
// console.log(myArr);

myArr.shift();
// console.log(myArr);

const newArr=myArr.join()
// console.log(newArr)
// console.log(typeof newArr);
const myn1=myArr.slice(1,3);    //array me se uss range ko nikal kar dega slice use karne per
console.log("A",myArr);         // original array
console.log(myn1);              // array after using slice.and no change in original data

const myn2=myArr.splice(1,3)
console.log("B",myn2);          // original array me se remove kar dega data splice use kar ne per 

console.log(myArr);             // original array after using splice

