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