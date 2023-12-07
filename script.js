document.addEventListener("DOMContentLoaded", function () {
    // API endpoint URL
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"; // Example API URL

    // Target element to display the API response
    const apiResponseElement = document.getElementById("apiResponse");

    // Make an API call using fetch
    fetch(apiUrl)
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Display the response data
            apiResponseElement.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Display an error message if the API call fails
            apiResponseElement.innerHTML = `Error: ${error.message}`;
        });
});
