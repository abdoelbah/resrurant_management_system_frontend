

# Sadeen Internship - Restaurant Management System - Frontend

This project is the frontend for the Restaurant Management System, developed as part of the **Sadeen Summer Internship 2024**. The frontend is built using **React**, **Recoil**, **Axios**, and **Material Tailwind**, and it communicates with a backend API to manage vendors, users, and dashboard statistics.

## Project Overview

The system provides a dashboard where administrators can manage restaurant vendors and view important statistics such as the number of vendors and users. Key features include:

- **Vendor Management**: Administrators can add, view, update, and delete vendors.
- **Dashboard Overview**: A page that displays visual charts and statistics about vendors and users.
- **Authentication**: Admins can log in using credentials to access the dashboard.

## Getting Started

To set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abdoelbah/resrurant_management_system_frontend.git
   cd sadeen-restaurant-management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   Add the backend URL in the `.env` file:
   ```bash
   VITE_URL=http://localhost:8000
   ```

4. **Run the app in development mode**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

The main structure of the project is as follows:
```
src/
├── components/        # Reusable components (e.g., Sidebar, Header, Vendor management)
├── screens/           # Main screens (Home, Vendors)
├── views/             # Authentication and Dashboard views
├── atoms/             # Recoil state management
└── utils/             # Utility functions
```

## Environment Variables

- `VITE_URL`: The backend API base URL.

## Dependencies

- **React**: Frontend framework
- **Recoil**: State management
- **React Router DOM**: Routing for navigation
- **Axios**: For making HTTP requests to the backend
- **Material Tailwind**: UI components styled with Tailwind CSS
- **HeroIcons**: Icons used in the UI

## Notes

This project is part of the **Sadeen Summer Internship 2024**, where students work on building a complete restaurant management system with both backend and frontend components.

---
