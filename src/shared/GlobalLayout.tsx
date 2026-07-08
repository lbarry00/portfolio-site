import type { CSSProperties } from "react";
import { useEffect, useState, type ChangeEvent } from "react";
import { Link, Outlet } from "react-router-dom";
import { MoonIcon, SunIcon } from "../assets/icons";
import { RESUME_LINK } from "./constants";

function GlobalLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "customdark");
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const sidebarMenuStyle: CSSProperties = {
    "--menu-active-bg": "transparent",
    "--menu-active-fg": "inherit"
  } as CSSProperties;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("customdark");
    } else {
      setTheme("customlight");
    }
  };

  const navBarTextColor = theme === "customdark" ? "text-primary" : "text-base-content";

  return (
    <div className="min-h-screen flex flex-col text-base-content transition-colors duration-400 ease-in-out">
      <div className="drawer flex-1 ">
        <input
          id="nav-drawer"
          type="checkbox"
          checked={isNavDrawerOpen}
          onChange={(e) => setIsNavDrawerOpen(e.target.checked)}
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col flex-1">
          {/* Navbar */}
          <div
            className={`navbar bg-base-100 ${navBarTextColor} p-4 font-semibold shadow-md lg:h-auto lg:min-h-0 min-h-40`}>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="nav-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost drawer-button p-4 h-24 w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block stroke-current">
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
                className="flex-1 lg:text-2xl text-5xl lg:ml-4 ml-8">
                LEO BARRY
              </Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal text-sm gap-4">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <a
                    href={RESUME_LINK}
                    target="_blank">
                    RESUME
                  </a>
                </li>
                <li>
                  <label className="swap swap-rotate text-base-content py-2">
                    <input
                      type="checkbox"
                      onChange={handleToggleTheme}
                      checked={theme === "customdark"}
                    />
                    <div className="swap-on">
                      <SunIcon />
                    </div>
                    <div className="swap-off self-start">
                      <MoonIcon />
                    </div>
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
          <ul
            style={sidebarMenuStyle}
            className={`menu items-start bg-base-100 ${navBarTextColor} min-h-full w-100 p-8 gap-6 text-4xl font-semibold`}>
            {/* Sidebar content here */}
            <li className="w-full">
              <Link
                className="w-full py-8 px-6"
                to="/"
                onClick={() => setIsNavDrawerOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="w-full">
              <Link
                className="w-full py-8 px-6"
                to="/about"
                onClick={() => setIsNavDrawerOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li className="w-full">
              <a
                className="w-full py-8 px-6"
                href={RESUME_LINK}
                target="_blank"
                onClick={() => setIsNavDrawerOpen(false)}>
                RESUME
              </a>
            </li>
            <li>
              <label className="swap swap-rotate text-base-content w-full p-6 mx-2">
                <input
                  type="checkbox"
                  onChange={handleToggleTheme}
                  checked={theme === "customdark"}
                />
                <div className="swap-on">
                  <SunIcon sizeOverride={18} />
                </div>
                <div className="swap-off self-start">
                  <MoonIcon sizeOverride={18} />
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GlobalLayout;
