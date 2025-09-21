# React + Vite
# React Dashboard

A responsive and modern dashboard built with **React** and **Vite**, featuring a sidebar, top navigation, and notification panel.

---

## 🚀 Live Demo

Deployed on Vercel: [https://react-dashboard-ui-tau.vercel.app/](https://react-dashboard-ui-tau.vercel.app/)

---

## 📦 Tech Stack

* **React + Vite** for fast development and bundling
* **Tailwind CSS** for styling
* **React Router** for navigation
* **Responsive Layout** with custom hooks
* **Reusable Components** (Sidebar, Navbar, Notification Bar, etc.)

---

## 🛠️ Setup & Installation

### Prerequisites

* Node.js (>=16.x recommended)
* npm or yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/shriram007/React-Dashboard-UI.git

# 2. Go into the project folder
cd reactdashboard

# 3. Install dependencies
npm install
# or
yarn install

# 4. Start development server
npm run dev
```

App will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Serve locally after build:

```bash
npm run preview
```
---

## 🧩 Design Decisions

* **Vite over CRA**: Faster build times and simpler configuration.
* **Custom Hook (`useResponsive`)**: Handles screen size detection to make the layout adapt across desktop, tablet, and mobile.
* **Modular Components**: Split into `LeftSidebar`, `TopNavbar`, `RightNotificationBar`, making layout scalable.
* **Dynamic Breadcrumbs**: Active page info updates based on route via `useLocation`.

---

## ⚡ Challenges Faced

* **Responsive Layout Handling**: Managing sidebar and notification bar margins required conditional class logic.
* **Breadcrumb Design**: Needed a clean way to link pages hierarchically.
* **Dark Mode**: Ensuring consistent Tailwind dark mode support across all components.

---

## 🔧 Improvements Made

* Unified design system with Tailwind CSS.
* Added smooth transitions when opening/closing sidebar and notification bar.
* Improved code reusability with reusable hooks and modularized UI components.

---

## 📖 Code Documentation

* **Components**: Each major UI piece (Sidebar, Navbar, NotificationBar) documented with props (`isOpen`, `onClose`, `screenSize`).
* **Hooks**: Custom hooks like `useResponsive` clearly explain their return values.
* **Functions**: Inline comments for tricky logic (e.g., `getActivePageInfo` and `getMainContentClasses`).

---

## 📌 Future Enhancements

* Add authentication and user roles.
* Integrate API for live dashboard data.
* Add unit tests (Jest + React Testing Library).

---

## 👤 Author

**Shriram**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
