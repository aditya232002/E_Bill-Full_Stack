package E_bill;

public class Customer {
    int consumerID;
    int billNumber;
    String title;
    String name;
    String email;
    String mobileNumber;
    String userID;
    String password;

    public Customer(int consumerID, int billNumber, String title, String name, String email, String mobileNumber, String userID, String password) {
        this.consumerID = consumerID;
        this.billNumber = billNumber;
        this.title = title;
        this.name = name;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.userID = userID;
        this.password = password;
    }

    public void display() {
        System.out.println("Consumer ID: " + consumerID + ", Name: " + name + ", Email: " + email + ", Mobile: " + mobileNumber);
    }
}
