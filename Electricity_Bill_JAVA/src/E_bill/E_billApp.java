package E_bill;

import java.util.Scanner;
import java.util.regex.Pattern;

public class E_billApp {
    static Scanner sc = new Scanner(System.in);
    static Customer[] customers = new Customer[10];
    static Bill[] bills = new Bill[10];
    static Complaint[] complaints = new Complaint[10];
    static int customerCount = 0, billCount = 0, complaintCount = 0;


    public static boolean isValidEmail(String email) {
        return Pattern.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", email);
    }

    public static boolean isValidMobile(String mobile) {
        return Pattern.matches("\\d{10}", mobile);
    }

    
    public static void addCustomer() {
        if (customerCount < customers.length) {
            System.out.println("Enter Consumer ID:");
            int consumerID = sc.nextInt();
            System.out.println("Enter Bill Number:");
            int billNumber = sc.nextInt();
            sc.nextLine(); // Consume newline
            System.out.println("Enter Title (Mr/Ms):");
            String title = sc.nextLine();
            System.out.println("Enter Customer Name:");
            String name = sc.nextLine();
            System.out.println("Enter Email:");
            String email = sc.nextLine();

            while (!isValidEmail(email)) {
                System.out.println("Invalid email format! Enter again:");
                email = sc.nextLine();
            }

            System.out.println("Enter Mobile Number:");
            String mobile = sc.nextLine();
            while (!isValidMobile(mobile)) {
                System.out.println("Invalid mobile number! Enter again:");
                mobile = sc.nextLine();
            }

            String userID = "User" + consumerID;
            System.out.println("Enter Password:");
            String password = sc.nextLine();
            System.out.println("Confirm Password:");
            String confirmPassword = sc.nextLine();

            while (!password.equals(confirmPassword)) {
                System.out.println("Passwords do not match! Enter again:");
                password = sc.nextLine();
                System.out.println("Confirm Password:");
                confirmPassword = sc.nextLine();
            }

            customers[customerCount++] = new Customer(consumerID, billNumber, title, name, email, mobile, userID, password);
            System.out.println("Customer Registration is successful.");
        } else {
            System.out.println("Customer list is full.");
        }
    }

    public static void viewCustomers() {
        for (int i = 0; i < customerCount; i++) {
            customers[i].display();
        }
    }

    public static void addBill() {
        if (billCount < bills.length) {
            System.out.println("Enter Consumer Number:");
            int consumerNumber = sc.nextInt();
            System.out.println("Enter Due Amount:");
            double dueAmount = sc.nextDouble();
            System.out.println("Enter Payable Amount:");
            double payableAmount = sc.nextDouble();

            bills[billCount++] = new Bill(consumerNumber, dueAmount, payableAmount);
            System.out.println("Bill details are added successfully.");
        } else {
            System.out.println("Bill list is full.");
        }
    }

    public static void registerComplaint() {
        if (complaintCount < complaints.length) {
            sc.nextLine();
            System.out.println("Enter Complaint Type:");
            String type = sc.nextLine();
            System.out.println("Enter Category:");
            String category = sc.nextLine();
            System.out.println("Enter Landmark:");
            String landmark = sc.nextLine();
            System.out.println("Enter Customer Name:");
            String name = sc.nextLine();
            System.out.println("Enter Problem Description:");
            String problem = sc.nextLine();
            System.out.println("Enter Consumer Number:");
            int consumerNumber = sc.nextInt();
            sc.nextLine();
            System.out.println("Enter Address:");
            String address = sc.nextLine();
            System.out.println("Enter Mobile Number:");
            String mobile = sc.nextLine();
            
            while (!isValidMobile(mobile)) {
                System.out.println("Invalid mobile number! Enter again:");
                mobile = sc.nextLine();
            }

            complaints[complaintCount++] = new Complaint(type, category, landmark, name, problem, consumerNumber, address, mobile);
            System.out.println("Successfully registered Complaint.");
        } else {
            System.out.println("Complaint list is full.");
        }
    }

    public static void main(String[] args) {
        while (true) {
            System.out.println("\n1. Add Customer");
            System.out.println("2. View Customers");
            System.out.println("3. Add Bill");
            System.out.println("4. Register Complaint");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    addCustomer();
                    break;
                case 2:
                    viewCustomers();
                    break;
                case 3:
                    addBill();
                    break;
                case 4:
                    registerComplaint();
                    break;
                case 5:
                    System.out.println("Exiting application...");
                    sc.close();
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }
}
