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
      <header className="navbar w-screen bg-base-100 text-base-content p-4 font-bold shadow-md">
        <div className="flex-1">
          <Link
            to="/"
            className=" flex-1 text-2xl ml-4">
            LEO BARRY
          </Link>
        </div>
        <div className="flex-none mr-4">
          <ul className="menu menu-horizontal gap-4 p-0 text-sm">
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
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggleTheme}
                checked={theme === "dark"}
              />
              <SunIcon />
              <MoonIcon />
            </label>
          </ul>
        </div>
      </header>
      <main className="flex-1 overflow-auto flex">
        <Outlet />
      </main>
    </div>
  );
}

export default GlobalLayout;
