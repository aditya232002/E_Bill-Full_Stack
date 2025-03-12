import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pay-bill',
  templateUrl: './view-pay-bill.component.html',
  styleUrls: ['./view-pay-bill.component.css']
})
export class ViewPayBillComponent implements OnInit {
  bills = [
    { id: 1001, month: 'January', amount: 500 },
    { id: 1002, month: 'February', amount: 750 },
    { id: 1003, month: 'March', amount: 1200 }
  ];
  totalAmount: number = 0;
  billState: boolean[] = [];
  welcomeMessage: string = '';

  ngOnInit() {
    const storedName = localStorage.getItem('customerName');
    if (storedName) {
      this.welcomeMessage = `Welcome ${storedName}!`;
    }

    const savedState = JSON.parse(localStorage.getItem('billState') || '[]');
    this.billState = savedState;
    this.calculateTotal();
  }

  toggleBillSelection(index: number, amount: number) {
    this.billState[index] = !this.billState[index];
    this.calculateTotal();
    localStorage.setItem('billState', JSON.stringify(this.billState));
  }

  calculateTotal() {
    this.totalAmount = this.bills.reduce((total, bill, index) => {
      return this.billState[index] ? total + bill.amount : total;
    }, 0);
    localStorage.setItem('amount', this.totalAmount.toString());
  }

  openNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.width = '250px';
  }

  closeNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.width = '0';
  }

  proceedToPay() {
    if (this.totalAmount > 0) {
      alert(`Proceeding to payment. Total Amount: ₹${this.totalAmount}`);
      // Add routing logic here
    } else {
      alert('Please select at least one bill to pay.');
    }
  }
}
