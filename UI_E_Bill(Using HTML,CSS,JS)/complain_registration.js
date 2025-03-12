const categories = {
    Billing: ["Incorrect Bill", "Overcharged", "Missing Bill"],
    Voltage: ["Low Voltage", "High Voltage"],
    Disruption: ["Frequent Outages", "Unexpected Cuts"],
    "Street Light": ["Not Working", "Dim Light"],
    Pole: ["Damage Pole", "Leaning Pole"]
};

document.getElementById("complaintType").addEventListener("change", (event) => {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = "";

    const selectedType = event.target.value;
    if (categories[selectedType]) {
        categories[selectedType].forEach((category) => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    } else {
        const defaultOption = document.createElement("option");
        defaultOption.textContent = "Select a complaint type first";
        categorySelect.appendChild(defaultOption);
    }
});

document.getElementById("mobileNumber").addEventListener("input", () => {
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const mobileNumberError = document.getElementById("mobileNumberError");

    if (!/^\d{10}$/.test(mobileNumber)) {
        mobileNumberError.textContent = "* Please enter a valid mobile number (10 digits)";
    } else {
        mobileNumberError.textContent = ""; // Clear error message if valid
    }
});

document.getElementById("details").addEventListener("input", () => {
    const details = document.getElementById("details").value.trim();
    const detailsError = document.getElementById("detailsError");
    const wordCount = details.split(/\s+/).filter(word => word.length > 0).length;

    if (wordCount < 5 || wordCount > 150) {
        detailsError.textContent = `* Details must be between 5 and 150 words (currently ${wordCount} words)`;
    } else {
        detailsError.textContent = ""; // Clear error message if valid
    }
});

document.getElementById("submitComplaint").addEventListener("click", () => {
    const mobileNumber = document.getElementById("mobileNumber").value.trim();
    const complaintType = document.getElementById("complaintType").value;
    const category = document.getElementById("category").value;
    const details = document.getElementById("details").value.trim();
    const successMessage = document.getElementById("successMessage");
    const detailsError = document.getElementById("detailsError");
    const wordCount = details.split(/\s+/).filter(word => word.length > 0).length;

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate Mobile Number
    if (!/^\d{10}$/.test(mobileNumber)) {
        document.getElementById("mobileNumberError").textContent = "* Field required";
        isValid = false;
    }

    // Validate other fields
    if (!complaintType) {
        document.getElementById("complaintTypeError").textContent = "* Field required";
        isValid = false;
    }
    if (!category) {
        document.getElementById("categoryError").textContent = "* Field required";
        isValid = false;
    }
    // if (!details) {
    //     document.getElementById("detailsError").textContent = "* Field required";
    //     isValid = false;
    // } else if (wordCount < 10 || wordCount > 150) {
    //     detailsError.textContent = `* Details must be between 10 and 150 words (currently ${wordCount} words)`;
    //     isValid = false;
    // }

    if (isValid) {
        const complaintId = Math.floor(100000 + Math.random() * 900000);

        // Save to localStorage
        const complaintData = {
            complaintId,
            mobileNumber,
            complaintType,
            category,
            details,
            // date: new Date().toLocaleString()
        };
        localStorage.setItem(`complaint-${complaintId}`, JSON.stringify(complaintData));

        successMessage.textContent = `Complaint Registered Successfully! Complaint ID: ${complaintId}`;
    }
});

//document.getElementById("logoutButton").addEventListener("click", () => {
//    alert("You have been logged out.");
//    location.reload();
//});

// Function to search for a complaint by ID or Mobile Number
function searchComplaint() {
    const searchKey = prompt("Enter Mobile Number or Complaint ID:");
    if (searchKey) {
        let found = null;

        // Iterate over localStorage to find the data
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("complaint-")) {
                const data = JSON.parse(localStorage.getItem(key));
                if (data.mobileNumber === searchKey || data.complaintId.toString() === searchKey) {
                    found = data;
                    break;
                }
            }
        }

        if (found) {
            alert(`Complaint Found:\nID: ${found.complaintId}\nMobile: ${found.mobileNumber}\nType: ${found.complaintType}\nCategory: ${found.category}\nDetails: ${found.details}\nDate: ${found.date}`);
        } else {
            alert("No complaint found with the provided information.");
        }
    }
}

// nav baar

const storedName = localStorage.getItem('customerName');
console.log(storedName);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("userInfo").textContent = `Welcome, ${storedName}!`;
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Function to handle logout
function logout() {
    alert("Logging out...");
    // Add your logout logic here, such as redirecting to a logout URL or clearing session data
    window.location.href = "index.html"; // Example logout URL
}