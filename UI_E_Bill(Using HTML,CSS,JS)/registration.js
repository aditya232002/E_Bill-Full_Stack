
document.getElementById('registerButton').addEventListener('click', function() {
    const consumerId = document.getElementById('consumerId').value;
    const billNumber = document.getElementById('billNumber').value;
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    

    // Validate fields
    let isValid = true;
    clearErrors();

    if (!/^\d{13}$/.test(consumerId)) {
        showError('consumerIdError', 'Consumer ID must be exactly 13 digits.');
        isValid = false;
    }
    if (!/^\d{5}$/.test(billNumber)) {
        showError('billNumberError', 'Bill Number must be exactly 5 digits.');
        isValid = false;
    }
    if (customerName.length < 3) {
        showError('customerNameError', 'Enter Full Name.');
        isValid = false;
    }
    if (!validateEmail(email)) {
        showError('emailError', 'Invalid Email.');
        isValid = false;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
        showError('mobileNumberError', 'Invalid Mobile Number.');
        isValid = false;
    }
    if (userId.length < 5) {
        showError('userIdError', 'User ID must be at least 5 characters.');
        isValid = false;
    }
    if (!validatePassword(password)) {
        showError('passwordError', 'Invalid Password Type.');
        isValid = false;
    }
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If valid, show alert
    if (isValid) {
        const randomCustomerId = generateRandomCustomerId();
        storeInLocalStorage(consumerId, customerName, email, mobileNumber, userId, password, randomCustomerId, billNumber);
        showAlert(`Registration Successful!\nCustomer ID: ${randomCustomerId}\nName: ${customerName}\nEmail: ${email}`);
    }
});

// Event listeners for real-time validation
const fieldsToValidate = ['consumerId', 'billNumber', 'mobileNumber', 'customerName', 'email', 'userId', 'password', 'confirmPassword'];

fieldsToValidate.forEach(fieldId => {
    document.getElementById(fieldId).addEventListener('input', function() {
        clearErrors();
        validateField(fieldId);
    });
});

document.getElementById('alertOkButton').addEventListener('click', function() {
    location.href = 'index.html'; // Redirect to login page
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearErrors(); // Clear all errors when resetting
    document.getElementById('consumerId').value ="";
    document.getElementById('billNumber').value ="";
    document.getElementById('customerName').value ="";
    document.getElementById('email').value ="";
    document.getElementById('mobileNumber').value ="";
    document.getElementById('userId').value ="";
    document.getElementById('password').value ="";
    document.getElementById('confirmPassword').value ="";
    document.getElementById('countryCode').value ="";
    document.getElementById('title').value ="";

});

// Field validation function
function validateField(fieldId) {
    const value = document.getElementById(fieldId).value;

    switch (fieldId) {
        case 'consumerId':
            if (!/^\d{13}$/.test(value)) {
                showError('consumerIdError', 'Consumer ID must be exactly 13 digits.');
            }
            break;
        case 'billNumber':
            if (!/^\d{5}$/.test(value)) {
                showError('billNumberError', 'Bill Number must be exactly 5 digits.');
            }
            break;
        case 'mobileNumber':
            if (!/^\d{10}$/.test(value)) {
                showError('mobileNumberError', 'Invalid Mobile Number.');
            }
            break;
        case 'customerName':
            if (value.length < 3) {
                showError('customerNameError', 'Enter Full Name.');
            }
            break;
        case 'email':
            if (!validateEmail(value)) {
                showError('emailError', 'Invalid Email.');
            }
            break;
        case 'userId':
            if (value.length < 5) {
                showError('userIdError', 'User ID must be at least 5 characters.');
            }
            break;
        case 'password':
            if (!validatePassword(value)) {
                showError('passwordError', 'Invalid Password Type.');
            }
            break;
        case 'confirmPassword':
            const password = document.getElementById('password').value;
            if (value !== password) {
                showError('confirmPasswordError', 'Passwords do not match.');
            }
            break;
    }
}

function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.innerText = '');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return re.test(password);
}

function generateRandomCustomerId() {
    return Math.floor(1000000000000 + Math.random() * 9000000000000).toString(); // Random 13-digit Customer ID
}

function storeInLocalStorage(consumerId, customerName, email, mobileNumber, userId, password, randomCustomerId, billNumber) {
    localStorage.setItem('consumerId', consumerId);
    localStorage.setItem('customerName', customerName);
    localStorage.setItem('email', email);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('userId', userId);
    localStorage.setItem('password', password);
    localStorage.setItem('randomCustomerId', randomCustomerId);
    localStorage.setItem('billNumber', billNumber);
}


function showAlert(message) {
    document.getElementById('alertMessage').innerText = message;
    document.getElementById('alertBox').style.display = 'flex';
}