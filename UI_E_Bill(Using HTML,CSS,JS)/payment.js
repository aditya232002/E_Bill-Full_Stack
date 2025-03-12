// CVV Field: Allow only numeric input
document.getElementById("cvv").addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D/g, ""); // Remove non-digits
});

// Expiry Date: Add MM/YY formatting and validate
document.getElementById("expiryDate").addEventListener("input", (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 2) {
        value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    event.target.value = value;

    // Validate expiry date
    const [month, year] = value.split("/").map(Number);
    const now = new Date();
    const currentYear = parseInt(now.getFullYear().toString().slice(-2)); // Last two digits
    const currentMonth = now.getMonth() + 1; // 0-based index

    const expiryError = document.getElementById("expiryError");
    if (
        value.length === 5 &&
        (month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth))
    ) {
        expiryError.style.display = "block";
    } else {
        expiryError.style.display = "none";
    }
});

document.getElementById("makePayment").addEventListener("click", () => {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardHolderName = document.getElementById("cardHolderName").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const customerID = localStorage.getItem('randomCustomerId');
    const billNumber = localStorage.getItem('billNumber');
    const amount = localStorage.getItem('amount');

    if (cardNumber.length !== 19 || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
        alert("Please enter a valid card number.");
        return;
    }
    if (cardHolderName.length < 3) {
        alert("Please enter a valid cardholder name.");
        return;
    }
    if (document.getElementById("expiryError").style.display === "block") {
        alert("Please enter a valid expiry date.");
        return;
    }
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }

    
    alert("Payment successful! A receipt will be downloaded.");
   
    const receiptData = `Payment Receipt\n\nCardholder: ${cardHolderName}\nAmount: ₹${amount}\nBill Number: ${billNumber}\nCustomer ID: ${customerID}\nDate: ${new Date().toLocaleDateString()}`;
    const blob = new Blob([receiptData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Payment_Receipt.txt";
    a.click();
    URL.revokeObjectURL(url);
    window.location.href = "home.html";
});

document.getElementById("cardNumber").addEventListener("input", (event) => {
    let value = event.target.value.replace(/\D/g, "");
    value = value.match(/.{1,4}/g)?.join(" ") || value;
    event.target.value = value;
});
