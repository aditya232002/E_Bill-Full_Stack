

document.querySelector('.pay').addEventListener('click', function () {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
    const errorMessage = document.getElementById('error-message');
    
    if (!paymentMethod) {
        errorMessage.textContent = 'Please select a payment method.';
    } else {
        window.location.href = "payment.html";
    }
});

const billNu = document.getElementById("billNumber");


const customerID = localStorage.getItem('randomCustomerId');
const billNumber = localStorage.getItem('billNumber');
const amount = localStorage.getItem('amount');
console.log(customerID);
console.log(billNumber);
console.log(amount);

if(payableAmount){
	consumerNumber.textContent = `${customerID}`;
	billNu.textContent = `${billNumber}`;
	payableAmount.textContent = `${amount}`;
	
}


//const storedBillDetails = localStorage.getItem("billDetails");

//function populateBillDetails() {
//    
//    
//
//    if (storedBillDetails) {
//        // Parse the retrieved JSON data
//        const { consumerNumber, billNumber, payableAmount } = JSON.parse(storedBillDetails);
//
//        // Populate the values in the DOM using the retrieved data
//        document.getElementById("consumerNumber").textContent = customerID;
//        document.getElementById("billNumber").textContent = billNumber;
//        document.getElementById("payableAmount").textContent = payableAmount;
//    }
//}

//window.onload = populateBillDetails;
