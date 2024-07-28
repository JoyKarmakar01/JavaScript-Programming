// Parsing JSON: Convert JSON strings into JavaScript objects.

// Method: JSON.parse()


const jsonString = '{"name":"John","age":30}';
const userObject = JSON.parse(jsonString);
console.log(userObject)



// Stringifying Objects: Convert JavaScript objects into JSON strings.

// Method: JSON.stringify()

const userObject1 = { name: "John", age: 30 };
const jsonString1 = JSON.stringify(userObject1);
console.log(jsonString1)