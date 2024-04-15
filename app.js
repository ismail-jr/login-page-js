document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form inputs
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    // Password validation
    if (password !== confirmPassword) {
        document.getElementById("password-error").innerText = "Passwords do not match.";
        return; // Prevent form submission
    }

    // Simulated login validation (replace with actual validation logic)
    if (username === "admin" && password === "password") {
        alert("Login successful! Welcome, " + username + "!");
        // Redirect to dashboard or another page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});