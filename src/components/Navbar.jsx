"use client";
import { navbarItems } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import Modal2 from "./Modal2";

const Navbar = ({ children }) => {
  const id = 4;

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-gradient-to-tr rounded-b-3xl from-base-100 to-base-300 md:w-[80vw] m-auto text-error-content text-2xl font-semibold">
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
          <div className="flex-1 px-2 mx-2 gap-4 text-tertiaryPurple font-semibold text-3xl">
            <Image src={"/images/logo.png"} width={40} height={40} alt="alt" />{" "}
            Apna Scanner
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal items-center">
              {/* Navbar menu content here */}
              {navbarItems?.map((ele) => (
                <li key={ele} className="text-lg">
                  <a>{ele}</a>
                </li>
              ))}
            </ul>
            <Link href={"/signup"}>
              <li className="text-lg btn bg-gradient-to-r from-secondaryPurple to-tertiaryPurple">
                Sign Up
              </li>
            </Link>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-100 space-y-4">
          {/* Sidebar content here */}
          {navbarItems.map((ele) => (
            <li key={ele} className="shadow-sm rounded-lg">
              <a className="p-4">{ele}</a>
            </li>
          ))}
          <li>
            <Link href={"/signup"}>Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
