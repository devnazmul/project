import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import ErrorPageProfile from './ErrorPageProfile';
import './index.css';
import MainLayout from './layouts/MainLayout';
import UserDashboard from './layouts/UserDashboard';
import About from './pages/About';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Franchise from './pages/Franchise';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import BecomePartner from './pages/UserProfile/BecomePartner';
import MyBooking from './pages/UserProfile/MyBooking';
import MyVehicles from './pages/UserProfile/MyVehicles';
import Profile from './pages/UserProfile/Profile';
import reportWebVitals from './reportWebVitals';


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
    path: "/profile",
    element: <UserDashboard />,
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

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
