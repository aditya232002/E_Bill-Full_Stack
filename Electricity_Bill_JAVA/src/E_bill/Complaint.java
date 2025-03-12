package E_bill;
public class Complaint {
    String complaintType;
    String category;
    String landmark;
    String name;
    String problem;
    int consumerNumber;
    String address;
    String mobileNumber;

    public Complaint(String complaintType, String category, String landmark, String name, String problem, int consumerNumber, String address, String mobileNumber) {
        this.complaintType = complaintType;
        this.category = category;
        this.landmark = landmark;
        this.name = name;
        this.problem = problem;
        this.consumerNumber = consumerNumber;
        this.address = address;
        this.mobileNumber = mobileNumber;
    }

    public void display() {
        System.out.println("Complaint Type: " + complaintType + ", Problem: " + problem + ", Consumer Number: " + consumerNumber);
    }
}
