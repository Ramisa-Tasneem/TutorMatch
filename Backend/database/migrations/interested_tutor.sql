CREATE TABLE interested_tutor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    tutoring_experience VARCHAR(100) NOT NULL,
    preferred_class VARCHAR(255) NOT NULL,
    preferred_medium VARCHAR(255) NOT NULL,
    preferred_subjects TEXT NOT NULL,
    preferred_time VARCHAR(255) NOT NULL,
    expected_minimum_salary DECIMAL(10,2) NOT NULL,
    preferred_tuition_style VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);