import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left */}
        <div>
          <img
            className="h-12 w-12 lg:h-16 lg:w-16 rounded-full object-cover mb-0 cursor-pointer"
            src={assets.logo}
            alt="assets logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Metamind is your trusted partner in achieving exceptional growth and
            efficiency through smart, personalized consulting services. Let us
            help you transform your business and achieve your full potential.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="text-xl fornt-medium mb-5"> Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About MetaMind</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <p className="text-xl fornt-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Tel: (+254) 797 246 096 /(+254) 799 949 392</li>
            <li>metamindlimited@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ MetaMind Limited - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
