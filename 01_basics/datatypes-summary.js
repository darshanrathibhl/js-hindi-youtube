// Primitive

//  7 types  :String,Number,Boolean,null,undefined,Symbol,BigInt

//Reference Type(Non primitive)
    // Array,Objects,Functions  

let id=Symbol('123');
let anotherId=Symbol('123');

// console.log(id===anotherId);

const heros=["shaktiman","hanuman","chota bheem"]       //Arrays

let myObj={
    name:"darshan",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");
}

// console.log(typeof heros);               // object
// console.log(typeof myObj);                  // object
// console.log(typeof myFunction);             // function

let x=undefined
// console.log(typeof x);                   "undefined"

let y=null;
// console.log(typeof y);                   "object"


//for reference

// https://262.ecma-international.org/5.1/#sec-11.4.3