# Backend Implementation Plan - Resource Management Dashboard

This document outlines the requirements and design for the Spring Boot backend to support the Resource Management Dashboard.

## 1. Technology Stack
- **Language**: Java 17+
- **Framework**: Spring Boot 3.x
- **Build Tool**: Maven or Gradle
- **Database**: H2 (Development) / MySQL or PostgreSQL (Production)
- **Persistence**: Spring Data JPA

## 2. Data Model (Entities)

### `Resource` Entity
Matches the frontend `Resource` interface.

| Field Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `String` (UUID) or `Long` | Primary Key, Auto-generated | Unique identifier |
| `name` | `String` | Not Null | Name of the resource (e.g., "HP LaserJet Pro") |
| `type` | `Enum` or `String` | Not Null | Type (printer, chair, ac, fan, cctv, blackboard, projector, computer) |
| `allocatedTo` | `String` | Not Null | Person or Room allocated to |
| `allocationType` | `Enum` or `String` | Not Null | `FACULTY` or `CLASSROOM` |
| `status` | `Enum` or `String` | Not Null | `WORKING` or `NON_WORKING` |
| `lastMaintenance` | `LocalDate` | Nullable | Last maintenance date |
| `purchaseDate` | `LocalDate` | Not Null | Date of purchase |

**Enums:**
- `ResourceType`: `PRINTER`, `CHAIR`, `AC`, `FAN`, `CCTV`, `BLACKBOARD`, `PROJECTOR`, `COMPUTER`
- `AllocationType`: `FACULTY`, `CLASSROOM`
- `Status`: `WORKING`, `NON_WORKING`

## 3. API Endpoints (`ResourceController`)

Base URL: `/api/resources`

### 3.1 Get All Resources (with Filters)
- **Method**: `GET`
- **URL**: `/api/resources`
- **Query Parameters** (Optional):
    - `type` (String): Filter by resource type.
    - `status` (String): Filter by status.
    - `search` (String): Partial match on `name` or `allocatedTo`.
- **Response**: `200 OK`
- **Body**: Array of `Resource` objects.

### 3.2 Get Resource by ID
- **Method**: `GET`
- **URL**: `/api/resources/{id}`
- **Response**: `200 OK` or `404 Not Found`

### 3.3 Create Resource
- **Method**: `POST`
- **URL**: `/api/resources`
- **Body**: `Resource` object (excluding `id`).
- **Response**: `201 Created` with the created object.

### 3.4 Update Resource
- **Method**: `PUT`
- **URL**: `/api/resources/{id}`
- **Body**: `Resource` object fields to update.
- **Response**: `200 OK` or `404 Not Found`

### 3.5 Delete Resource
- **Method**: `DELETE`
- **URL**: `/api/resources/{id}`
- **Response**: `204 No Content` or `404 Not Found`

## 4. Service Layer Logic
- **`ResourceService`**:
    - `getAllResources(type, status, search)`: Implement filtering logic. If using JPA, `Specification` is recommended for dynamic querying.
    - `createResource(resource)`: Save to DB.
    - `updateResource(id, resource)`: Check existence, update fields, save.
    - `deleteResource(id)`: Check existence, delete.

## 5. Security (Optional/Future)
- Currently, no authentication is observed in the frontend.
- If required, implement Spring Security with JWT/Basic Auth.
- Enable CORS (`@CrossOrigin`) to allow requests from the frontend (e.g., `http://localhost:5173`).

## 6. Development Steps
1. **Initialize Project**: Spring Initializr with Web, JPA, H2/MySQL, Lombok/DevTools.
2. **Create Entity**: Define `Resource` class with annotations `@Entity`, `@Id`, etc.
3. **Create Repository**: `ResourceRepository extends JpaRepository<Resource, String>`.
4. **Create Service**: Implement business logic.
5. **Create Controller**: Expose REST endpoints.
6. **Populate Data**: Create a `CommandLineRunner` or `data.sql` to load the initial mock data (from `mockData.ts`) into the database on startup for testing.
