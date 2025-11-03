# 1. Title

Hospital Management System (HMS) using React and FastAPI

## 2. Introduction

The Hospital Management System (HMS) is a full-stack web application designed to digitalize and streamline hospital operations such as patient management, doctor scheduling, pharmacy control, and billing.
The system leverages FastAPI for a high-performance, scalable backend and React.js for a dynamic, user-friendly frontend interface.
This modern architecture ensures fast response times, role-based access control, and secure handling of sensitive medical data.

## 3. Objectives

The main objectives of the HMS project are to:

- Automate and simplify hospital administrative and clinical workflows.
- Maintain secure, accurate, and easily retrievable electronic health records (EHRs).
- Enable role-based access for administrators, doctors, nurses, pharmacy staff, and patients.
- Provide real-time insights into hospital operations, billing, and inventory.
- Offer a responsive, intuitive user interface for both staff and patients.

## 4. Scope

The HMS covers the following modules:

### Patient Management Module

- Patient registration and profile management
- Appointment booking and history tracking
- Electronic medical records (EHRs)

### Doctor Management Module

- Doctor profiles, schedules, and appointments
- Prescription generation linked to pharmacy

### Pharmacy Management Module

- Medicine inventory management
- Dispensing and stock updates
- Expiry and low-stock alerts

### Billing & Financial Module

- Automatic invoice generation
- Payment processing (cash, card, insurance)

### Admin & Staff Management

- Role-based access control (RBAC)
- Staff attendance and shift management

## 5. System Architecture

The application follows a modern three-tier architecture:

| Layer       | Technology       | Description                                                 |
|-------------|------------------|-------------------------------------------------------------|
| Frontend    | React.js         | Provides a responsive and dynamic user interface for all roles. |
| Backend API | FastAPI (Python) | Handles business logic, authentication, and API endpoints.    |
| Database    | PostgreSQL / SQLite | Stores all persistent hospital data.                        |

**Data Flow:**

1. User interacts via React web interface.
2. React communicates with FastAPI through secure REST APIs.
3. FastAPI interacts with the PostgreSQL database to process and return data.

## 6. Key Features

- 🔒 User Authentication & Role-Based Authorization (JWT)
- 🧾 Patient Registration & Appointment Management
- 👨‍⚕️ Doctor Schedules & Prescriptions
- 💊 Pharmacy & Inventory Management
- 💰 Billing and Payments
- 📊 Admin Dashboard for Analytics
- 🧠 Scalable API design for future integration (labs, insurance systems)

## 7. Non-Functional Requirements

| Category    | Requirement                                                 |
|-------------|-------------------------------------------------------------|
| Security    | Encrypted patient data, JWT-based authentication, GDPR-compliant. |
| Performance | API response under 200ms for common operations.             |
| Usability   | Intuitive interface, minimal clicks per workflow.           |
| Scalability | Easily extendable to multiple hospitals or cloud deployment.  |
| Reliability | Automatic error handling and consistent data validation.      |

## 8. Technology Stack

| Component        | Technology                                |
|------------------|-------------------------------------------|
| Frontend         | React.js, Axios, React Router, Tailwind CSS |
| Backend          | FastAPI, SQLAlchemy, Pydantic             |
| Database         | PostgreSQL / SQLite                       |
| Authentication   | JSON Web Tokens (JWT)                     |
| Hosting          | Render / AWS / Vercel                     |
| Version Control  | GitHub / GitLab                           |

## 9. Expected Outcome

By the end of the project:

- The hospital will have a centralized, secure system for managing patients, doctors, pharmacy, and billing.
- All manual workflows will be automated, improving operational efficiency.
- Decision-makers will have access to real-time insights and reports.
- The system can be extended into a cloud-based or mobile platform for future scalability.

## 10. Conclusion

The proposed Hospital Management System (HMS) using React and FastAPI is a modern, efficient, and scalable solution for hospital digitization.
It will reduce human errors, improve patient care, ensure data privacy, and enhance hospital operations.
By combining Python’s high-performance FastAPI backend with React’s interactive frontend, this system provides a robust, future-ready healthcare management solution.

## 11. How to Run the Application

### Backend

1.  Navigate to the `backend` directory:
    ```sh
    cd hospital-management-system/backend
    ```
2.  Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```
3.  Run the application:
    ```sh
    uvicorn app.main:app --reload
    ```

### Frontend

1.  Navigate to the `frontend` directory:
    ```sh
    cd hospital-management-system/frontend
    ```
2.  Install the required packages:
    ```sh
    npm install
    ```
3.  Run the application:
    ```sh
    npm start
    ```

