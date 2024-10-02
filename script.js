// Get references to the container and buttons
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// Function to toggle between Sign Up and Sign In forms
function toggleForms() {
    container.classList.toggle('right-panel-active');
}

// Attach event listeners to the buttons
signUpButton.addEventListener('click', toggleForms);
signInButton.addEventListener('click', toggleForms);

// Optional: Add form submission handlers
document.querySelector('.sign-up-container form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your sign up logic here
    console.log('Sign Up form submitted');
});

document.querySelector('.sign-in-container form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your sign in logic here
    console.log('Sign In form submitted');
});

// Optional: Add "Forgot Password" functionality
document.getElementById('forgetPassword').addEventListener('click', function(e) {
    e.preventDefault();
    // Add your forgot password logic here
    console.log('Forgot password clicked');
});