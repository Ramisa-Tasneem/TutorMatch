CREATE TABLE post_tuitions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    StudentName VARCHAR(255) NOT NULL,
    ParentName VARCHAR(255) NOT NULL,
    ParentEmail VARCHAR(255) NOT NULL
    PhoneNumber VARCHAR(20) NOT NULL,
    Class VARCHAR(50) NOT NULL,
    Subject VARCHAR(255) NOT NULL,
    City VARCHAR(100) NOT NULL,
    Area VARCHAR(100) NOT NULL,
    Time VARCHAR(100) NOT NULL,
    Salary DECIMAL(10,2) NOT NULL,
    ShortTuitionDescription TEXT,
    PreferredMedium VARCHAR(100),
    Experience VARCHAR(100),
    Type VARCHAR(50),
);