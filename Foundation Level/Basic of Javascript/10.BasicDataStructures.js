// Arrays
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
console.log(fruits);

// Objects
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet();
console.log(person.age);
person.age = 31;
console.log(person.age);
