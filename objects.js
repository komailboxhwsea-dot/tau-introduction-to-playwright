const cookie = {};
console.log(cookie); // Output: {} - This is an empty object. Objects are collections of key-value pairs, where each key is a string and each value can be any data type, including other objects or arrays.

const person = {
    name: "Alice",
    age: 30,                
    isStudent: false,
    hobbies: ["reading", "traveling", "cooking"],
    address: {      
        street: "123 Main St",

        city: "Anytown",
        country: "USA"
    }
};      

console.log(person.name); // Output: "Alice" - Accessing the value of the "name" key in the person object.
console.log(person.age); // Output: 30 - Accessing the value of the "age" key in the person object.
console.log(person.isStudent); // Output: false - Accessing the value of the "isStudent" key in the person object.
console.log(person.hobbies); // Output: ["reading", "traveling", "cooking"] - Accessing the value of the "hobbies" key in the person object, which is an array.
console.log(person.address); // Output: { street: "123 Main St", city: "Anytown", country: "USA" } - Accessing the value of the "address" key in the person object, which is another object.
console.log(person.address.city); // Output: "Anytown" - Accessing the value of the "city" key in the nested "address" object within the person object.         

person.name = "Bob"; // Modifying the value of the "name" key in the person object.
console.log(person.name); // Output: "Bob" - The name has been updated to "Bob".    
person.hobbies.push("painting"); // Adding a new hobby to the "hobbies" array in the person object.
console.log(person.hobbies); // Output: ["reading", "traveling", "cooking", "painting"] - The new hobby "painting" has been added to the hobbies array.
person.address.zipCode = "12345"; // Adding a new key-value pair to the nested "address" object within the person object..     

console.log(person.address); // Output: { street: "123 Main St", city: "Anytown", country: "USA", zipCode: "12345" } - The new key-value pair "zipCode": "12345" has been added to the address object


