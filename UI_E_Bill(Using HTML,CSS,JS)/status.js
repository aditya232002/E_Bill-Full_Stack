document.getElementById("get-status").addEventListener("click", function () {
    const complaintNumber = document.getElementById("complaint-number").value.trim();

    if (complaintNumber === "") {
        alert("Please enter a complaint number.");
        return;
    }

    // Fetch the complaint data from localStorage
    const complaintData = JSON.parse(localStorage.getItem(`complaint-${complaintNumber}`));
    const storedName = localStorage.getItem('customerName');
    const storedId = localStorage.getItem('randomCustomerId');
    console.log(storedName);
    console.log(storedId);
    if (complaintData) {
        // Display the complaint data
    			 document.getElementById("consumerId").innerText = `${storedId}`;
    			 document.getElementById("consumerName").innerText = `${storedName}`;
                 document.getElementById("consumer-number").innerText = complaintData.complaintId;
                 document.getElementById("contact-number").innerText = complaintData.mobileNumber;
                 document.getElementById("complaint-type").innerText = complaintData.complaintType;
                 document.getElementById("category").innerText = complaintData.category;
                 document.getElementById("details").innerText = complaintData.details;
				 document.getElementById("status").innerText = "Active";

                 // Show the status display section
                 document.getElementById("status-display").style.display = "block";
    } else {
        alert("No complaint found with the provided number.");
    }
});

// Reset details when the form is reset
document.getElementById("complaint-form").addEventListener("reset", function () {
	document.getElementById("consumer-number").innerText = "";
    document.getElementById("contact-number").innerText = "";
    document.getElementById("complaint-type").innerText = "";
    document.getElementById("category").innerText = "";
    document.getElementById("details").innerText = "";
	document.getElementById("status").innerText = "";
	document.getElementById("status-display").style.display = "none";
});

const storedName = localStorage.getItem('customerName');
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