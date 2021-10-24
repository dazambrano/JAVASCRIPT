const ages = [3, 10, 18, 20];
function checkAge(age) {
    return age > 18;
}
console.info("find method")
console.log(ages.find(checkAge))

console.info("findIndex method");
console.log(ages.findIndex(checkAge))

function ages_forEach(number){
    console.log(number)
}
console.info("for each");
console.log(ages.forEach(ages_forEach))

let js = "JAVASCRIPT";
console.log(Array.from(js));

const fruits = ["Banana", "Orange", "Apple", "Mango","Apple"];
console.log(fruits.includes("Apple"));

console.info("Index Of");
console.log(fruits.indexOf("Apple"));

console.info("Last Index Of");
console.log(fruits.lastIndexOf("Apple"));

console.info("is Array");
console.log(Array.isArray(fruits));

console.info("Join");
console.log(fruits.join())

console.info("Get the Keys from array");
let keys = fruits.keys()

for(let key of keys){
    console.log(key)
}

console.info("Length");
console.log(fruits.length)

const numbers = [4, 9, 16, 25];
console.info("Map");
console.log(numbers.map(Math.sqrt))