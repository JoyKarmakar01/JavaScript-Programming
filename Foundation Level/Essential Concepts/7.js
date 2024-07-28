// JSON string
const jsonString = '{"name":"John","age":30}';

// Parse JSON string into JavaScript object
const userObject = JSON.parse(jsonString);

// Access data
console.log(userObject.name); // Output: John
console.log(userObject.age);  // Output: 30
