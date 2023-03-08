import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [theme, setTheme] = useState(localStorage.getItem('admin-theme')?localStorage.getItem('admin-theme'):'light');

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="navbar bg-white">
      <div className="flex-1"></div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1 ">
              <li>
                <button>
                  Themes
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </button>
                <ul
                  id="themeDrop"
                  className="p-2 z-50 bg-base-300 mt-0 h-96 overflow-y-scroll"
                >
                  {themes.map((theme, i) => (
                    <li key={i}>
                      <button
                        onClick={() => {
                          JSON.parse(
                            localStorage.setItem("admin-theme", theme)
                          );
                          setTheme(theme);
                        }}
                      >
                        {theme}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={``} className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to={``}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
