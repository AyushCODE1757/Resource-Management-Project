# Resource Management Project

A full-stack resource management application consisting of a Spring Boot backend and a React-based dashboard frontend. This project allows for efficient tracking, allocation, and maintenance of various organizational resources.

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete resources.
- **Advanced Filtering**: Filter resources by type, status, and search functionality.
- **Data Seeding**: Automatically populates the database with initial sample data on startup.
- **Responsive Dashboard**: A modern UI for managing resources at a glance.
- **H2 Database**: Persistent file-based storage using Spring Data JPA.

## 🛠 Project Structure

- `ResourceManagmentBackend/`: Spring Boot Java application handling the REST API and data persistence.
- `Resource Management Dashboard/`: Vite + React + Tailwind CSS frontend application.

## 💻 Tech Stack

### Backend
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Data JPA** (Hibernate)
- **H2 Database**
- **Maven**

### Frontend
- **React 18**
- **Vite**
- **Tailwind CSS**
- **Radix UI**
- **Lucide Icons**

## 🚦 Getting Started

### Prerequisites
- Node.js & npm
- Java JDK 17 or higher
- Maven (or use the included `mvnw`)

---

### Running the Backend

1. Navigate to the backend directory:
   ```powershell
   cd ResourceManagmentBackend
   ```
2. Build and run the application:
   ```powershell
   ./mvnw.cmd spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.
   - **H2 Console**: Accessible at `http://localhost:8080/h2-console`
   - **API Base URL**: `http://localhost:8080/api/resources`

### Running the Frontend

1. Navigate to the frontend directory:
   ```powershell
   cd "Resource Management Dashboard"
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```
   The dashboard will be available at `http://localhost:5173`.

---

## 📖 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/resources` | List all resources (supports `type`, `status`, `search` query params) |
| `GET` | `/api/resources/{id}` | Get a single resource by ID |
| `POST` | `/api/resources` | Create a new resource |
| `PUT` | `/api/resources/{id}` | Update an existing resource |
| `DELETE` | `/api/resources/{id}` | Delete a resource |

## 🔗 Design
The original project design is based on this [Figma Design](https://www.figma.com/design/TnFYZLTBebSy3FyIyPIinc/Resource-Management-Dashboard).
