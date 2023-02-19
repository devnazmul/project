import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllContextProvider from './context/AllContextProvider';
import './index.css';
import AdminDashboard from './layouts/AdminDashboard';
import MainLayout from './layouts/MainLayout';
import UserDashboard from './layouts/UserDashboard';
import About from './pages/About';
import Cart from './pages/AdminDashboard/Cart';
import User from './pages/AdminDashboard/User';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error/ErrorPage';
import ErrorPageProfile from './pages/Error/ErrorPageProfile';
import Franchise from './pages/Franchise';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import { ProtectedRoute } from './pages/ProtectedRoute/ProtectedRoute';
import BecomePartner from './pages/UserProfile/BecomePartner';
import MyBooking from './pages/UserProfile/MyBooking';
import MyVehicles from './pages/UserProfile/MyVehicles';
import Profile from './pages/UserProfile/Profile';
import reportWebVitals from './reportWebVitals';

// API BASE URL 
axios.defaults.baseURL = 'http://localhost:8080/api/v1'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/franchise",
        element: <Franchise />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: "/profile",
    element: <ProtectedRoute><UserDashboard /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/profile",
        element: <ErrorPageProfile />,
      },
      {
        path: "/profile/dashboard",
        element: <Profile />,
      },
      {
        path: "/profile/my_bookings",
        element: <MyBooking />,
      },
      {
        path: "/profile/my_vehicles",
        element: <MyVehicles />,
      },
      {
        path: "/profile/become_partner",
        element: <BecomePartner />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <User />
      },
      {
        path: "/admin/dashboard/cart",
        element: <Cart />
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AllContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AllContextProvider>
);

reportWebVitals();
