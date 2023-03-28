import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import elememt1 from "../assets/profileElement1.svg";
import elememt2 from "../assets/profileElement2.svg";
import { useAuth } from "../context/AuthProvider";
export default function UserDashboard() {
  
  // const navigate = useNavigate();
  const { isLogin } = useAuth();

  // useEffect(() => {
  //   if (window.location.pathname === "/profile" && isLogin) {
  //     navigate("/profile/dashboard");
  //   } else {
  //     localStorage.removeItem("data");
  //     navigate("/login");
  //   }
  // }, [window.location.pathname]);

  const navigate = useNavigate();
  useEffect(() => {
    // REDIRECT TO THE ADMIN DASHBOARD
    if (window.location.pathname === "/profile") {
      navigate("/profile/dashboard");
    }
  }, []);
  return (
    <>
      {isLogin && (
        <div className="bg-gradient-to-l from-[#83e9fb] to-[#f591d2] px-5 py-5 md:px-10 md:py-10 h-screen">
          <div className="profileLayoutGlass flex justify-center items-start overflow-hidden">
            <aside className="w-2/12 h-[87vh] profileDashboardAsideGlass px-5 py-5 relative">
              <NavLink
                title="Go Back"
                className={` inline-block hover:font-semibold mb-10`}
                to={`/`}
              >
                <span className="border-b border-black ">Back</span>
              </NavLink>
              <div className="">
                <ul>
                  <li>
                    <NavLink
                      title="Profile"
                      className={(navData) =>
                        `w-full rounded-lg transition-all duration-200 hover:text-white hover:bg-[#83e9fb] hover:bg-opacity-50 hover:translate-x-2 shadow-md border-l border-t border-white py-2 px-2 my-2 ${
                          navData.isActive ? "bg-pink-500" : "bg-white"
                        } bg-opacity-40 inline-block`
                      }
                      to={`/profile/dashboard`}
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      title="My Booking"
                      className={(navData) =>
                        `w-full rounded-lg transition-all duration-200 hover:text-white hover:bg-[#83e9fb] hover:bg-opacity-50 hover:translate-x-2 shadow-md border-l border-t border-white py-2 px-2 my-2 ${
                          navData.isActive ? "bg-pink-500" : "bg-white"
                        } bg-opacity-40 inline-block`
                      }
                      to={`/profile/my_bookings`}
                    >
                      My Booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      title="My Vehiclesr"
                      className={(navData) =>
                        `w-full rounded-lg transition-all duration-200 hover:text-white hover:bg-[#83e9fb] hover:bg-opacity-50 hover:translate-x-2 shadow-md border-l border-t border-white py-2 px-2 my-2 ${
                          navData.isActive ? "bg-pink-500" : "bg-white"
                        } bg-opacity-40 inline-block`
                      }
                      to={`/profile/my_vehicles`}
                    >
                      My Vehicles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      title="Become Partner"
                      className={(navData) =>
                        `w-full rounded-lg transition-all duration-200 hover:text-white hover:bg-[#83e9fb] hover:bg-opacity-50 hover:translate-x-2 shadow-md border-l border-t border-white py-2 px-2 my-2 ${
                          navData.isActive ? "bg-pink-500" : "bg-white"
                        } bg-opacity-40 inline-block`
                      }
                      to={`/profile/become_partner`}
                    >
                      Become Partner
                    </NavLink>
                  </li>
                </ul>
                <button
                  title={`logout`}
                  className="absolute bottom-5 right-5 text-primaryRed font-semibold"
                >
                  Logout
                </button>
              </div>
            </aside>
            <div className="w-10/12 h-[87vh] relative">
              <img
                className="absolute right-0 top-0 w-72"
                src={elememt1}
                alt="element"
              />
              <img
                className="absolute right-0 bottom-0 w-96"
                src={elememt2}
                alt="element"
              />
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
