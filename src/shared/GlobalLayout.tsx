import { useEffect, useState, type ChangeEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import { MoonIcon, SunIcon } from "../assets/icons";

function GlobalLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-base-content transition-colors duration-400 ease-in-out">
      <div className="drawer flex-1 ">
        <input
          id="nav-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col flex-1 ">
          {/* Navbar */}
          <div className="navbar w-screen bg-base-100 text-base-content p-4 font-bold shadow-md lg:h-auto min-h-30">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="nav-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Link
                to="/"
                className="flex-1 lg:text-2xl text-4xl ml-4">
                LEO BARRY
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <a href="">RESUME</a>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <label className="swap swap-rotate">
                    <input
                      type="checkbox"
                      onChange={handleToggleTheme}
                      checked={theme === "dark"}
                    />
                    <SunIcon />
                    <MoonIcon />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <main className="flex-1 overflow-auto flex bg-base-200">
            <Outlet />
          </main>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="nav-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu bg-base-100 min-h-full w-80 p-4 gap-6 text-3xl">
            {/* Sidebar content here */}
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <a href="">RESUME</a>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="my-6">
              <label className="flex cursor-pointer gap-2">
                <SunIcon />
                <input
                  type="checkbox"
                  className="toggle toggle-xl"
                  onChange={handleToggleTheme}
                  checked={theme === "dark"}
                />
                <MoonIcon />
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GlobalLayout;
