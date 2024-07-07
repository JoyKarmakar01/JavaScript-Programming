var globalVar = "I'm a global variable";

function scopeTest() {
    let blockScoped = "I'm block scoped";
    const constantVar = "I can't be changed";
    
    if (true) {
        var functionScoped = "I'm function scoped";
        console.log(blockScoped); // Accessible here
    }
    console.log(functionScoped); // Accessible here
}

scopeTest();
console.log(globalVar); // Accessible here
// console.log(blockScoped); // Error: blockScoped is not defined
// console.log(constantVar); // Error: constantVar is not defined
