 
1) Storing a customer data- Create a customer table c_id(13 digits), c_name(max 50 char), email, mob_no., user_id{min 5 and max 20 (text box)}, password, confirm_pwd, Status (Active or not) 2) Alter a table Customer table - add title(salutations), bill number(enter a last 5 digits of the customer bill) 3) Find the customer whose name ends with "a" & sort it in desc order and in output we need to see only C_id | C_name | Email 4) Calculate the avg bill per city - Create a table for the bill_details {C_id, C_name, address, city, bill of customer} 5) Gives the details of the customer who don't pay the bill Specially month of JUNE. For the we need to create the table monthly bill and we the output only of the june month customers along with their id and name.


CREATE TABLE Customer (  
    ConsumerID NUMBER(13) PRIMARY KEY, -- Primary Key  
    CustomerName VARCHAR2(50) NOT NULL,  
    Email VARCHAR2(100),  
    MobileNumber VARCHAR2(15),  
    UserID VARCHAR2(20) CONSTRAINT chk_userid_length CHECK (LENGTH(UserID) BETWEEN 5 AND 20),  
    Password VARCHAR2(30) NOT NULL,  
    ConfirmPassword VARCHAR2(30) NOT NULL,  
    Status VARCHAR2(8) CHECK (Status IN ('Active', 'Inactive'))  
) 
;

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) 
VALUES (1234567890126, 'Aditya', 'aditya@example.com', '9123456789', 'aditya123', 'Aditya@123', 'Aditya@123', 'Active');

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) 
VALUES (1234567890127, 'Ankit', 'ankit@example.com', '9234567890', 'ankit321', 'Ankit@321', 'Ankit@321', 'Active');

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) 
VALUES (1234567890128, 'Manjeet', 'manjeet@example.com', '9345678901', 'manjeet007', 'Manjeet007', 'Manjeet007', 'Inactive');

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) 
VALUES (1234567890129, 'Shalini', 'shalini@example.com', '9456789012', 'shalini2024', 'Shalini@24', 'Shalini@24', 'Active');

INSERT INTO Customer (ConsumerID, CustomerName, Email, MobileNumber, UserID, Password, ConfirmPassword, Status) 
VALUES (1234567890130, 'Preet', 'preet@example.com', '9567890123', 'preet009', 'Preet009', 'Preet009', 'Inactive');

select * from Customer;

ALTER TABLE Customer 
ADD Title VARCHAR2(5) DEFAULT 'Mr.' CHECK (Title IN ('Mr.', 'Ms.', 'Mrs.', 'Dr.'));

ALTER TABLE Customer 
ADD BillNumber NUMBER(5);

select * from Customer;

SELECT ConsumerID, CustomerName, Email   
FROM Customer   
WHERE CustomerName LIKE '%a'   
ORDER BY CustomerName DESC;

CREATE TABLE BillDetails (  
    BillID NUMBER(5) PRIMARY KEY,  
    ConsumerID NUMBER(13), 
    Address VARCHAR2(255),  
    City VARCHAR2(50),  
    BillAmount NUMBER(10, 2),  
    CONSTRAINT fk_consumer FOREIGN KEY (ConsumerID) REFERENCES Customer(ConsumerID)  
);

drop BillDetails;

drop table BillDetails;

CREATE TABLE BillDetails (  
    BillID NUMBER(5) PRIMARY KEY,  
    ConsumerID NUMBER(13),  
    Address VARCHAR2(255),  
    City VARCHAR2(50),  
    BillAmount NUMBER(10, 2),  
    CONSTRAINT fk_consumer FOREIGN KEY (ConsumerID) REFERENCES Customer(ConsumerID)  
);

SELECT  
    b.BillID,  
    b.ConsumerID,  
    c.CustomerName,  
    b.Address,  
    b.City,  
    b.BillAmount 
FROM  
    BillDetails b 
JOIN  
    Customer c 
ON  
    b.ConsumerID = c.ConsumerID;

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (1, 1234567890123, '123 Main St', 'Mumbai', 1500.50);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (2, 1234567890123, '123 Main St', 'Mumbai', 2000.75);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (3, 1234567890124, '456 Hill St', 'Pune', 1800.25);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (4, 1234567890124, '456 Hill St', 'Pune', 2200.50);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (5, 1234567890125, '789 Green St', 'Delhi', 800.75);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (6, 1234567890125, '789 Green St', 'Delhi', 1200.90);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (7, 1234567890126, '321 Lake St', 'Mumbai', 1700.80);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (8, 1234567890127, '987 Hill View', 'Pune', 1400.00);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (9, 1234567890127, '987 Hill View', 'Pune', 1600.45);

INSERT INTO BillDetails (BillID, ConsumerID, Address, City, BillAmount) 
VALUES (10, 1234567890126, '321 Lake St', 'Mumbai', 2500.30);

SELECT  
    b.BillID,  
    b.ConsumerID,  
    c.CustomerName,  
    b.Address,  
    b.City,  
    b.BillAmount 
FROM  
    BillDetails b 
JOIN  
    Customer c 
ON  
    b.ConsumerID = c.ConsumerID;

CREATE TABLE MonthlyBill (  
    BillID NUMBER(5) PRIMARY KEY,  
    ConsumerID NUMBER(13), 
    BillMonth VARCHAR2(20),  
    PaidStatus VARCHAR2(8) CHECK (PaidStatus IN ('Paid', 'Unpaid')),  
    CONSTRAINT fk_monthly_consumer FOREIGN KEY (ConsumerID) REFERENCES Customer(ConsumerID)  
) ;

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (1, 1234567890123, 'June', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (2, 1234567890124, 'June', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (3, 1234567890125, 'June', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (4, 1234567890126, 'July', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (5, 1234567890127, 'July', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (6, 1234567890123, 'July', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (7, 1234567890124, 'August', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (8, 1234567890125, 'August', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (9, 1234567890126, 'August', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (10, 1234567890127, 'September', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (11, 1234567890123, 'September', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (12, 1234567890124, 'September', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (13, 1234567890125, 'October', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (14, 1234567890126, 'October', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (15, 1234567890127, 'October', 'Paid');

SELECT City, AVG(BillAmount) AS AverageBill  
FROM BillDetails  
GROUP BY City  
ORDER BY AverageBill DESC;

SELECT c.ConsumerID, c.CustomerName 
FROM Customer c 
JOIN MonthlyBill m ON c.ConsumerID = m.ConsumerID 
WHERE m.PaidStatus = 'Unpaid' 
AND m.BillMonth = 'June';

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (1, 1234567890123, 'June', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (1, 1234567890127, 'June', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (2, 1234567890126, 'June', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (3, 1234567890125, 'June', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (4, 1234567890126, 'July', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (5, 1234567890127, 'July', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (6, 1234567890127, 'July', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (7, 1234567890124, 'August', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (8, 1234567890125, 'August', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (9, 1234567890126, 'August', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (10, 1234567890127, 'September', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (11, 1234567890126, 'September', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (12, 1234567890124, 'September', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (13, 1234567890125, 'October', 'Paid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (14, 1234567890126, 'October', 'Unpaid');

INSERT INTO MonthlyBill (BillID, ConsumerID, BillMonth, PaidStatus) 
VALUES (15, 1234567890127, 'October', 'Paid');

SELECT c.ConsumerID, c.CustomerName 
FROM Customer c 
JOIN MonthlyBill m ON c.ConsumerID = m.ConsumerID 
WHERE m.PaidStatus = 'Unpaid' 
AND m.BillMonth = 'June';

