let kitten1 = { name: "Mitsi", age: 4 };
let kitten2 = { ...kitten1 }; // Spread Operator

kitten1.name = "Kitsi";
kitten1.age = 5;

console.log(kitten1);
console.log(kitten2);


let arr1 = [1,2,3]
let arr2 = [...arr1] // Spread Operator
