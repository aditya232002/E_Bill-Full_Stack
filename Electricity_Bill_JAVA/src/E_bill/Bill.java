package E_bill;

public class Bill {
    int consumerNumber;
    double dueAmount;
    double payableAmount;

    public Bill(int consumerNumber, double dueAmount, double payableAmount) {
        this.consumerNumber = consumerNumber;
        this.dueAmount = dueAmount;
        this.payableAmount = payableAmount;
    }

    public void display() {
        System.out.println("Consumer Number: " + consumerNumber + ", Due Amount: " + dueAmount + ", Payable Amount: " + payableAmount);
    }
}
