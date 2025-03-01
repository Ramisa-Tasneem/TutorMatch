CREATE TABLE applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- Auto-increment ID for each applicant
    name VARCHAR(255) NOT NULL,           -- Store the applicant's name
    phone VARCHAR(15) NOT NULL,           -- Store the phone number
    email VARCHAR(255) NOT NULL,          -- Store the email address
    hsc_year YEAR NOT NULL,               -- Store the HSC year
    ssc_year YEAR NOT NULL,               -- Store the SSC year
    current_student_at VARCHAR(255),      -- Store the name of the institution
    student_id VARCHAR(255),              -- Store the student ID (path or filename)
    national_id VARCHAR(255),             -- Store the national ID (path or filename)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Track when the record was created
);
