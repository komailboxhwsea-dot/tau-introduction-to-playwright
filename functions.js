function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");
greet("Bob");

function sayGoodbye(name) {
    console.log("Goodbye, " + name + "!");
}

sayGoodbye("Alice");
sayGoodbye("Bob");

function sum (a, b) {
    return a + b;
}

console.log(sum(5, 3)); // Output: 8

function product(a, b) {
    return a * b;
}

console.log(product(5, 3)); // Output: 15

console.log(product(sum(2, 3), sum(1, 4))); // Output: 35, nested fucntionallity example 

const bigNumber = product(sum(10, 20), sum(5, 15)); // Output: 400
console.log(bigNumber);

setTimeout(function () {
    console.log("Hey, there!"); // Anonymous Function example 

}, 2000); // "Hey there! will appear after 2 seconds"

setTimeout(() => console.log("HEY THERE!"), 3000); // Same concept with arrow function 





