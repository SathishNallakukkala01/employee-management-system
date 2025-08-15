# Employee Management System

A full-stack web application for managing employee records, built using **Spring Boot**, **React.js**, and **MySQL**.  
The system allows adding, updating, viewing, and deleting employee details with a responsive user interface.

---

## 🚀 Features
- Add new employees with details
- Update existing employee records
- View all employees in a structured table format
- Delete employees from the database
- Responsive UI for desktop and mobile
- RESTful API integration between frontend and backend

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- HTML5, CSS3, JavaScript
- Axios (API calls)
- Vite (Build tool)

### Backend
- **Spring Boot**
- Hibernate / JPA
- RESTful APIs

### Database
- **MySQL**

### Tools & Platforms
- IntelliJ IDEA (Backend Development)
- VS Code (Frontend Development)
- MySQL Workbench
- Postman
- Git & GitHub
- Maven

---

## 📂 Project Structure
employee-management-system/
│
├── ems-backend/ # Spring Boot backend
│ ├── src/main/java # Java source code
│ ├── src/main/resources
│ └── pom.xml
│
├── ems-frontend/ # React.js frontend
│ ├── public/
│ ├── src/
│ └── package.json

## ⚙️ Installation & Setup

### Prerequisites
- Java 17+
- Node.js & npm
- MySQL
- Maven

### Backend Setup
```bash
cd ems-backend
mvn spring-boot:run
--
### Frontend Setup
```bash
# Navigate to the frontend directory
cd ems-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
