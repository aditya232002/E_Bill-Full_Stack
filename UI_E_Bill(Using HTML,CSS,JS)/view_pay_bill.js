
 

// Display welcome message;
const loggedInUser = localStorage.getItem('customerNamer');
const welcomeMessage = document.getElementById("welcomeMessage");
const storedName = localStorage.getItem('customerName');
    if (storedName) {
        welcomeMessage.textContent = `Welcome ${storedName}!`;
    }

// Sidebar and logout functionality
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Scrolling header behavior
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        header.style.top = "-60px"; // Adjust based on header height
    } else {
        header.style.top = "0";
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Avoid negative scroll
});

// Scrolling footer behavior
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // At the bottom of the page
        footer.classList.add("highlight"); // Add a class to highlight footer
    } else {
        footer.classList.remove("highlight");
    }
});

const bills = [
    { id: 1001, month: "January", amount: 500 },
    { id: 1002, month: "Feb", amount: 750 },
    { id: 1003, month: "March", amount: 1200 },
];

const billList = document.getElementById("billList");
const totalAmountSpan = document.getElementById("totalAmount");

// Populate the table with bill data
bills.forEach((bill, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><input type="checkbox" class="bill-checkbox" data-index="${index}" data-amount="${bill.amount}"></td>
        <td>${bill.id}</td>
        <td>${bill.month}</td>
        <td>₹${bill.amount}</td>
    `;
    billList.appendChild(row);
});

// Load the saved state from localStorage
function loadState() {
    const savedState = JSON.parse(localStorage.getItem("billState")) || {};
    const checkboxes = document.querySelectorAll(".bill-checkbox");
    let total = 0;

    checkboxes.forEach((checkbox) => {
        const index = checkbox.dataset.index;
        if (savedState[index]) {
            checkbox.checked = true;
            total += parseInt(checkbox.dataset.amount, 10);
        }
    });

    totalAmountSpan.textContent = total;
}

// Save the current state to localStorage
function saveState() {
    const checkboxes = document.querySelectorAll(".bill-checkbox");
    const state = {};

    checkboxes.forEach((checkbox) => {
        const index = checkbox.dataset.index;
        state[index] = checkbox.checked;
    });

    localStorage.setItem("billState", JSON.stringify(state));
}

// Calculate the total amount dynamically

function calculateTotal() {
    const checkboxes = document.querySelectorAll(".bill-checkbox:checked");
    let total = 0;

    checkboxes.forEach((checkbox) => {
        total += parseInt(checkbox.dataset.amount, 10);
    });

    totalAmountSpan.textContent = total;
    localStorage.setItem("amount", total);
    saveState(); // Save state whenever total is updated
}

// Add event listener to the table for checkbox changes
billList.addEventListener("change", (event) => {
    if (event.target.classList.contains("bill-checkbox")) {
        calculateTotal();
    }
});

// Add event listener for the "Proceed to Pay" button
document.getElementById("proceedToPay").addEventListener("click", () => {
    const totalAmount = parseInt(totalAmountSpan.textContent, 10);
    if (totalAmount > 0) {
        alert(`Proceeding to payment. Total Amount: ₹${totalAmount}`);
        window.location.href = "bill_payment.html";
        

    } else {
        alert("Please select at least one bill to pay.");
    }
});
//function storeInLocalStorge(total){
//    
//}

