# Airport-Management-System

Airport Management System
A comprehensive frontend-only Airport Management System built with React.js that provides complete CRUD functionality for users and flights, along with ticket booking capabilities.

**🚀 Features**

**Splash Screen:** Beautiful introductory screen with smooth transition to main application

**Authentication System:** Login and register pages with context-based state management

**User Management:** Complete CRUD operations for users (Create, Read, Update, Delete)

**Flight Management:** Full CRUD operations for flight tickets

**Booking System:** Interlinked booking functionality connecting users to flights

**Flight Dashboard:** Comprehensive view of all available flights with real-time status

**Technical Features:**

**Context API State Management:** No prop drilling - all state managed through React Context

**Local Storage Persistence:** Data persists across browser refreshes

**Responsive Design:** Optimized for both mobile and desktop devices

**Form Validation:** Comprehensive input validation and user feedback

**Modern UI:** Clean, professional interface built with Bootstrap 5

**🛠 Technology Stack:**

**Frontend Framework:** React.js 18+

**State Management:** React Context API

**Routing**: React Router v6+

**Styling:** Bootstrap 5 with custom CSS

**Build Tool:** Vite

**Persistence:** localStorage

**ID Generation:** UUID v4 for unique identifiers

**📁 Project Structure:**

text
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   └── ...             # Other reusable components
├── context/            # Context providers
│   ├── AuthContext.js  # Authentication state management
│   ├── UserContext.js  # User CRUD operations
│   └── TicketContext.js # Flight ticket management
├── pages/              # Application pages
│   ├── Splash.js       # Splash screen
│   ├── Login.js        # Login page
│   ├── Register.js     # User registration
│   ├── Dashboard.js    # Main dashboard
│   ├── Users.js        # User management
│   └── Tickets.js      # Flight management
├── routes/             # Routing configuration
│   └── AppRouter.js    # Main router component
└── styles/             # Custom stylesheets
    └── ...             # CSS files
    
**🚀 Installation & Setup:**

Prerequisites
Node.js (v16 or higher)

npm or yarn package manager

**📱 Pages & Routing:**

/ - Splash screen (auto-redirects to login)

/login - User authentication

/register - New user registration

/dashboard - Main application dashboard

/users - User management interface

/tickets - Flight management and booking

**💡 Key Features Explained**

**User Management:**

Add new users with name and email

Edit existing user information

Delete users with confirmation dialog

Real-time updates across all components

**Flight Management:**

Create flight tickets with comprehensive details:

Flight number

Destination

Gate number

Departure/Arrival times

Flight status (On Time, Delayed, Cancelled)

Inline editing for quick updates

Delete flights with safety confirmation

**Booking System:**

Users can book available flights

Visual indication of booking status

Interlinked data showing user-flight relationships

**Flight Status:**

On Time: Green indicator

Delayed: Yellow/orange indicator

Cancelled: Red indicator

**🎨 Styling & UI:**

Framework: Bootstrap 5

Custom Components: Enhanced form controls and cards

Responsive Grid: Mobile-first design approach

Color Scheme: Professional airline-themed colors

Icons: Bootstrap Icons integration

**🔒 Data Persistence:**

All application data is stored in browser localStorage:

Users data persists across sessions

Flight information maintained after refresh

Authentication state preserved

Bookings remain intact

**📱 Responsive Design:**

Mobile: Single column layout with touch-friendly controls

Tablet: Adaptive grid system

Desktop: Multi-column layouts with optimal information density

**🚦 Form Validation:**

Required field validation

Email format verification

Time and date validation

Real-time error feedback

Confirmation dialogs for destructive actions

**🔄 State Management Flow:**

User Actions → Context Functions

Context Updates → State Changes

State Changes → Component Re-renders

Persistent Storage → localStorage Updates
