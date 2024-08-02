function registrationform(e) {

    e.preventDefault();

    const first_name = document.getElementById('fname').value.trim();
    const last_name = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const user_id = document.getElementById('userid').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.innerHTML = '';

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (first_name === '') {
        errorMsg.textContent = "First name is required.";
        return;
    } else if (!nameRegex.test(first_name)) {
        errorMsg.textContent = "First name can only contain alphabetic letters.";
        return;
    }

    if (last_name === '') {
        errorMsg.textContent = "Last name is required.";
        return;
    } else if (!nameRegex.test(last_name)) {
        errorMsg.textContent = "Last name can only contain alphabetic letters.";
        return;
    }

    if (email === '') {
        errorMsg.textContent = "Email is required.";
        return;
    } else if (!emailRegex.test(email)) {
        errorMsg.textContent = "Invalid email format.";
        return;
    }

    if (user_id === '') {
        errorMsg.innerHTML = "User ID is required.";
        return;
    }

    if (pass === '') {
        errorMsg.innerHTML = "Password is required.";
        return;
    } else if (!passwordRegex.test(pass)) {
        errorMsg.innerHTML = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return;
    }

    errorMsg.innerHTML = "Form submitted successfully!";
}
