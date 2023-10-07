// JavaScript to handle button click and redirection
document.getElementById("goButton").addEventListener("click", function () {
    var selectedOption = document.getElementById("optionDropdown").value;

    if (selectedOption === "piotr") {
        window.location.href = "https://example.com/piotr"; // Replace with the desired URL for Piotr
    } else if (selectedOption === "krzysztof") {
        window.location.href = "https://facebook.com"; // Redirect to Facebook for Krzysztof
    } else if (selectedOption === "dzik") {
        window.location.href = "https://google.com"; // Redirect to Google for Dzik
    } else if (selectedOption === "joe") {
        window.location.href = "https://youtube.com"; // Redirect to YouTube for Joe
    } else {
        alert("Please select an option before clicking Go.");
    }
});
