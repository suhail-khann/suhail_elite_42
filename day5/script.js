username ="suhail1341@gmail.com"

function fnvalidate() {
    let isValid = true;

    let inputFirstName = document.getElementById("first_name").value;
    let firstNameError = document.getElementById("first-name-error");
    if (inputFirstName.length < 5) {
        firstNameError.innerText = "First name should be at least 5 characters.";
        firstNameError.style.display = "block";
        isValid = false;
    } else {
        firstNameError.style.display = "none";
    }

  
    let inputLastName = document.getElementById("last_name").value;
    let lastNameError = document.getElementById("last-name-error");
    if (inputLastName.length < 5) {
        lastNameError.innerText = "Last name should be at least 5 characters.";
        lastNameError.style.display = "block";
        isValid = false;
    } else {
        lastNameError.style.display = "none";
    }

  
    let inputUsername = document.getElementById("username").value;
    let usernameError = document.getElementById("username-error");
    if (inputUsername !== username) {
        usernameError.innerText = "enter proper username .";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

  
    let inputPassword = document.getElementById("password").value;
    let passwordError = document.getElementById("password-error");
    if (inputPassword.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    
    let inputConfirmPassword = document.getElementById("confirm_password").value;
    let confirmPasswordError = document.getElementById("confirm-password-error");
    if (inputPassword !== inputConfirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (isValid) {
        alert("Registration successful");
    } else {
        alert("Please correct the errors and try again.");
    }
}
