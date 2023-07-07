"use client"
import { navbarItems } from "@/utils/constants";

const Navbar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-tertiaryPurple text-neutral-50 text-2xl font-semibold">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">Apna Scanner</div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navbarItems?.map((ele) => (
                <li key={ele}>
                  <a>{ele}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-100 space-y-4">
          {/* Sidebar content here */}
          <li>
            <a className="alert alert-error text-center text-xl">Apna Scanner</a>
          </li>
          {navbarItems.map((ele) => (
            <li key={ele} className="bg-base-200 rounded-3xl">
              <a>{ele}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
