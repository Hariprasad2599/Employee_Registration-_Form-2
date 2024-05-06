// Get form elements
const form = document.querySelector('form');
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');
const role = document.getElementById('role');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return false;
    }

    // Validate password
    if (!validatePassword(pwd.value)) {
        alert('Please enter a valid password (minimum 8 characters)');
        pwd.focus();
        return false;
    }

    // Validate role
    if (role.value === '') {
        alert('Please select a role');
        role.focus();
        return false;
    }

    // If all validations pass, submit the form
    form.submit();
});

// Function to validate email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Function to validate password
function validatePassword(pwd) {
    return pwd.length >= 8;
}