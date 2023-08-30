"use client";

import { endpoint } from "@/utils/constants";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_no: "",
    gst_no: "",
    pan_no: "",
    address: "",
    city: "",
    pin_code: "",
    state: "",
    country: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  function objectToFormData(obj) {
    const formData = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });

    return formData;
  }

  const formData = objectToFormData(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${endpoint}/api/brand`,
        data: formData,
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      });
      if (response?.data?.error) {
        enqueueSnackbar(response.data?.error, { variant: "error" });
      }
      enqueueSnackbar(response.data, { variant: "success" });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">
      <div
        className="hidden lg:flex w-full bg-gradient-to-br h-screen from-neutral-50 justify-center 
      items-center to-base-200"
      >
        <div className="text-9xl text-center">
          <h1>Apna</h1>
          <div className="text-primaryPurple font-bold border-primaryPurple border-4 p-2">
            Scanner
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-7xl text-center">
          <h1>
            Enter your details and{" "}
            <span className="text-primaryPurple">Sign Up</span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-8 justify-center items-center"
        >
          <div className="flex flex-wrap mt-4 gap-10 justify-center items-center">
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text"
              placeholder="Name"
              required
              className="input input-primary "
            />
            <input
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Email"
              className="input input-primary    "
            />
            <input
              required
              value={data.phone_no}
              onChange={(e) => setData({ ...data, phone_no: e.target.value })}
              type="number"
              placeholder="Phone Number"
              className="input input-primary    "
            />
            <input
              required
              value={data.gst_no}
              onChange={(e) => setData({ ...data, gst_no: e.target.value })}
              type="text"
              placeholder="Gst No"
              className="input input-primary    "
            />
            <input
              required
              value={data.pan_no}
              onChange={(e) => setData({ ...data, pan_no: e.target.value })}
              type="text"
              placeholder="Pan no."
              maxLength={10}
              className="input input-primary    "
            />
            <input
              required
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              type="text"
              placeholder="Address"
              className="input input-primary    "
            />
            <input
              required
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              type="text"
              placeholder="City"
              className="input input-primary    "
            />
            <input
              required
              value={data.pin_code}
              onChange={(e) => setData({ ...data, pin_code: e.target.value })}
              type="number"
              placeholder="Pin Code"
              className="input input-primary    "
            />
            <input
              required
              value={data.state}
              onChange={(e) => setData({ ...data, state: e.target.value })}
              type="text"
              placeholder="State"
              className="input input-primary    "
            />
            <input
              required
              value={data.country}
              onChange={(e) => setData({ ...data, country: e.target.value })}
              type="text"
              placeholder="Country"
              className="input input-primary    "
            />
          </div>
          <button type="submit" className="btn bg-primaryPurple mt-4 btn-wide">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
