const name="darshan"
const value=50

// console.log(name+value+" value");            // old ways

// string interpolation..... better way in modern day.

console.log(`my name is ${name} and my age is ${value}`);

const gameName=new String('darshanrathi');
// console.log(gameName[0]);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0,4);
console.log(newString);

const string1="    darshan    "
console.log(string1);
console.log(string1.trim());                // remove extra white spaces.

