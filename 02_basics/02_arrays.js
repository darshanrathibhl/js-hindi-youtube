const marvelHeroes=["Thor","IronMan","SpiderMan"]
const dcHeroes=["superman","flash","batman"]

// console.log(marvelHeroes.concat(dcHeroes));

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)

// const newHeroes=[...marvelHeroes,...dcHeroes];          // spread operator-> iska use yeh h ki do array ko add kar dega 
// console.log(newHeroes);


const another_array=[1,2,3,[2,6,4],5,9,[7,[10,9]]]
console.log(another_array.flat(Infinity));                  // saare array khul jayenge and ek particular array me convert ho jayenge


console.log(Array.isArray("darshan"));          // check that it's array or not
console.log(Array.from("darshan"));             //Convert into an array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));