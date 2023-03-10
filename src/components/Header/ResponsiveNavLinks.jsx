import React from "react";
import { NavLink } from "react-router-dom";

export default function ResponsiveNavLinks() {
  return (
    <>
      <NavLink
        title="Home"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/`}
      >
        Home
      </NavLink>

      <NavLink
        title="About"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/about`}
      >
        About
      </NavLink>

      <NavLink
        title="Partners"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/partners`}
      >
        Partners
      </NavLink>


      <NavLink
        title="Career"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/career`}
      >
        Career
      </NavLink>

      <NavLink
        title="Blog"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/blog`}
      >
        Blog
      </NavLink>

      <NavLink
        title="Contact"
        className={(navData) =>
          `py-2 hover:shadow-lg ${navData.isActive
            ? " bg-[#84E8FA] text-black"
            : "bg-[#fff] text-black"
          } hover:bg-[#F492D3] hover:text-white rounded-lg px-5 border hover:translate-x-2 transition-all duration-150 border-white hover:border`
        }
        to={`/contact`}
      >
        Contact
      </NavLink>
    </>
  );
}
