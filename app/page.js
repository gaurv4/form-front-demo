"use client";
import React, { useState } from "react";
import axios from "axios";
import env from "@/config/config";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function page() {
  const [authRes, setauthRes] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [showpass, setshowpass] = useState(false);

  const pass = () => {
    setshowpass(!showpass)
  }
  
  const sendData = async () => {
    
    try {
      const response = await axios.post(
        `https://server-backend-3p2t.onrender.com/api/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      
      if (response.data.msg) {
        setauthRes(response.data);
      }
    } catch (error) {
      if (error.response) {
        setauthRes(error?.response?.data);
      } else {
        setauthRes({ error: "Internal server Error" })
      }
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-svh">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Sign in
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div className="border-red-700 bg-red-100 rounded-md flex justify-center">
                <p className="text-red-500 px-3">
                  {authRes?.msg}
                  {authRes ? authRes.error : ""}
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type={showpass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button
                  className="absolute top-10 right-6 text-xl"
                  onClick={pass}
                >
                  {showpass ? (
                    <AiFillEye className="dark:text-white" />
                  ) : (
                    <AiFillEyeInvisible className="dark:text-white" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onclick={sendData}
                className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
