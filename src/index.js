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
import { Brand, CityMaster, Order, ServiceMaster, User } from './pages/AdminDashboard';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error/ErrorPage';
import Franchise from './pages/Franchise';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Partners from './pages/Partners';
import Services from './pages/Services';
import BecomePartner from './pages/UserProfile/BecomePartner';
import MyBooking from './pages/UserProfile/MyBooking';
import MyVehicles from './pages/UserProfile/MyVehicles';
import Profile from './pages/UserProfile/Profile';
import reportWebVitals from './reportWebVitals';

// API BASE URL 
// axios.defaults.baseURL = 'http://localhost:8080/api/v1'
axios.defaults.baseURL = 'https://bike-fixup-backend.vercel.app/api/v1'

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
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
    children: [
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
        index: true,
        element: <User />
      },
      {
        path: "/admin/dashboard/user",
        element: <User />
      },
      {
        path: "/admin/dashboard/brand",
        element: <Brand />
      },
      {
        path: "/admin/dashboard/order",
        element: <Order />
      },
      {
        path: "/admin/dashboard/serviceMaster",
        element: <ServiceMaster />
      },
      {
        path: "/admin/dashboard/cityMaster",
        element: <CityMaster />
      },
    ]
  },
  {
    path: "/sevices/:id",
    element: <Services />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: '',
        element: <Services />
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <RouterProvider router={router} />
    </AllContextProvider>
  </React.StrictMode>
);

reportWebVitals();
