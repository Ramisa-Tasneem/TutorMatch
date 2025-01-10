# **TutorMatch - Connecting Learners With Leaders**

## **Team Members**

| Roll Number      |      Name              |        Email               |      Role            |
|------------------|------------------------|----------------------------|--------------------- |
| 20220104050      | Maisha Ahmed Miha      | mihamaisha205@email.com    |  Backend Developer   |
| 20220104051      | Lamisa Rahman Zimy     | lamisazimy@gmail.com       |        Leader        |
| 20220104156      | Ramisa Tasneem         | tramisa1010@gmail.com      |  Frontend Developer  |


---

## **Project Overview**

### **Project Title**
**TutorMatch**

### **Objective**
**TutorMatch** aims to simplify the process of connecting tutors and students for personalized tutoring sessions. It allows tutors to find available tuitions, while students can find the right tutors based on their academic needs and preferences. The platform serves to bridge the gap between education providers and seekers.

### **Target Audience**
- **Tutors:** Individuals looking for tutoring opportunities to share their knowledge and skills.
- **Students & Parents:** Students or parents seeking qualified tutors for academic support, exam preparation, or skill development.
- **Educational Institutions:** Schools or organizations looking to connect students with specialized tutors.
- **Working Professionals:** Adults seeking tutors for personal development or learning new skills.

### **Tech Stack**
- **Backend:** Laravel (mandatory)
- **Frontend:** React (chosen for efficient rendering and reusable components)
- **Rendering Method:** Client-Side Rendering (CSR)

---

## **UI Design**

### **Mock UI**

- [View Figma Design](https://www.figma.com/design/dXlFDC00rCt3yNcWttYWV8/TutorMatch?node-id=0-1&t=Hr8w7Sue9hJPtBnQ-1)

---

## **Project Features**

- **User Authentication**  
  - Registration & Login functionality for both students and tutors.
  
- **Tutoring Opportunity Matching**  
  - Tutors can find available tuitions, and students can search for tutors based on specific needs.

- **Profile Management**  
  - Users (tutors and students) can create and manage their profiles, including details like skills, subjects, availability, and pricing.

- **Booking & Scheduling System**  
  - Students can book tutoring sessions based on available time slots of tutors, with real-time updates and reminders.

- **Rating & Reviews**  
  - After each session, both tutors and students can rate and review each other.

- **CRUD Operations**  
  - Users can create, read, update, and delete their profiles and sessions.

### **API Endpoints**


- `POST /auth/register` - Register a new user (tutor or student).
- `POST /auth/login` - Login for existing users.
- `POST /auth/logout` - Logout from the platform.
- `POST /auth/refresh` - Refresh authentication tokens.
- `GET /tutors` - Get list of tutors.
- `POST /tutor` - Add a new tutor.
- `POST /tuitions/:id/apply` - Apply to a specific tuition opportunity.
- `GET /tuitions/applied` - Retrieve a list of tuitions the tutor has applied fo
- `POST /tuitions/:id/save` - Save a tuition opportunity for later.
- `GET /tuitions/saved` - Retrieve a list of saved tuitions.



---

## **Milestones**

### Checkpoint 1:  Initial Setup & Frontend Development
- Design and implement the basic layout using React.
- Account setup and user authentication integration.
  
### Checkpoint 2: heckpoint 2: Build Backend & APIs
- Implement Laravel backend for tutiion posting and application management.
- Develop APIs for fetching and posting tution listings.

### Checkpoint 3: Finalization & Deployment**
- Admin Panel
- Complete UI/UX design and integrate with the platform.
- Testing of all features and bug fixes.
  
