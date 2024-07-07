try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error("An error occurred: " + error.message);
} finally {
    console.log("This runs no matter what.");
}

function riskyOperation() {
    throw new Error("Something went wrong!");
}
