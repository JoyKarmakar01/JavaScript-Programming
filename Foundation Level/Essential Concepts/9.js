// Fetch data from a server
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse JSON data
    .then(data => {
        console.log(data); // Use the JSON data
    })
    .catch(error => {
        console.error('Error:', error);
    });
