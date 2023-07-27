"use client";
import { endpoint, signUpForm } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const Signup = async () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_no: "",
    gst_no: "",
    pan_no: "",
    address: "",
    city: "",
    state: "",
    pin_code: "",
    country: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${endpoint}/api/brand`, { ...data });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // console.log(data);
  };

  return (
    <>
      <div className="flex">
        <div className="hidden md:flex w-full h-screen bg-gradient-to-br from-base-200 to-base-100 justify-center items-center">
          <div className="flex flex-col items-center">
            <Image
              src={"/images/logo.png"}
              width={200}
              height={200}
              alt="guestss"
            />
            <div className="md:text-9xl text-center">
              Apna{" "}
              <div
                className=" text-primaryPurple font-bold border-8 border-primaryPurple 
                  rotate-12 hover:rotate-0 transition-all ease-in-out duration-300"
              >
                Scanner
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:h-screen bg-base-100 p-10 gap-16 flex flex-col justify-center items-center">
          <div className="text-6xl text-center">
            Enter your Details and{" "}
            <span className="text-primaryPurple font-bold">Sign Up</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-8 items-center justify-center">
            {signUpForm?.map((ele, idx) => (
              <input
                value={data[ele?.name]}
                onChange={(e) =>
                  setData({ ...data, [ele.name]: e.target.value })
                }
                required
                key={ele.placeholder}
                type={ele.type}
                className="input border-primaryPurple lg:w-80 focus:outline-primaryPurple border-2"
                placeholder={ele.placeholder}
              />
            ))}
            <button
              type="submit"
              className="btn hover:bg-secondaryPurple bg-primaryPurple text-base-100 text-xl btn-block"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
