function getAverage() {
    var numberId = document.getElementById("numberId").value;

    var apiUrl = "";
    if (numberId === 'p') {
        apiUrl = "http://20.244.56.144/test/primes";
    } else if (numberId === 'f') {
        apiUrl = "http://20.244.56.144/test/fibo";
    } else if (numberId === 'e') {
        apiUrl = "http://20.244.56.144/test/even";
    } else if (numberId === 'r') {
        apiUrl = "http://20.244.56.144/test/random";
    } else {
        alert("Invalid number ID. Please enter p, f, e, or r.");
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Response Data:", data); // Log response data
            var responseDiv = document.getElementById("response");
            responseDiv.innerHTML = "<p>Numbers: " + data.numbers.join(", ") + "</p>";
        })
        .catch(error => {
            console.error('Error:', error);
            var responseDiv = document.getElementById("response");
            responseDiv.innerHTML = "<p>Error: Failed to fetch data from server</p>";
        });
}