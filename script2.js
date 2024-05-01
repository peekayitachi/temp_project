// JavaScript to handle login and register button functionality
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    const registerButton = document.querySelector("#register");

    // Handle form submission for login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // Placeholder for login logic (e.g., making a server request to authenticate the user)
        console.log(`Login attempt with username: ${username}, password: ${password}`);
        
        // For demonstration, redirect to habit tracker page after login attempt
        window.location.href = "tracker.html"; // Adjust path as necessary
    });

    // Handle register button click
    registerButton.addEventListener("click", () => {
        // Redirect to registration page
        window.location.href = "register.html"; // Adjust path as necessary
    });
});
