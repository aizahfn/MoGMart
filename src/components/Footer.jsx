import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { logoLight } from "../assets/index";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-5">
        {/* =====START NAME START===== */}
        <div className="flex flex-col gap-3 items-center text-gray-500">
          <h1 className="text-xl font-semibold mb-4">MoGMart</h1>
          <p className="text-sm text-center">
            The Best Center for Gadgets, Laptops and Accessories for Your
            Digital Life
          </p>
          <p className="text-gray-500 text-sm tracking-wide font-bodyFont font-bold">
            Social Media
          </p>
          <div className="flex gap-5 text-3xl text-gray-400">
            <FaYoutube className="hover:text-gray-500 duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-500 duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-500 duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-500 duration-300 cursor-pointer" />
          </div>
        </div>
        {/* =====END NAME END===== */}

        {/* =====START ADDRESS START===== */}
        <div className="text-gray-500">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <div className="text-base">
            <p className="mb-2">Sekaran Gunungpati, Semarang</p>
            <p className="mb-2">Mobile: 081392027175</p>
            <p className="mb-2">Phone: 0221 0567 0987</p>
            <p>E-mail: mogmart@gmail.com</p>
          </div>
        </div>
        {/* =====END ADDRESS END===== */}

        {/* =====START PROFILE START===== */}
        <div className="text-gray-500">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <div className="text-base">
            <p className="flex items-center mb-2 hover:text-gray-500 duration-300 cursor-pointer">
              <BsPersonFill className="text-2xl" />
              <span className="ml-2">About Us</span>
            </p>
            <p className="flex items-center mb-2 hover:text-gray-500 duration-300 cursor-pointer">
              <BsPaypal className="text-2xl" />
              <span className="ml-2">Privacy Policy</span>
            </p>
            <p className="flex items-center mb-2 hover:text-gray-500 duration-300 cursor-pointer">
              <FaHome className="text-2xl" />
              <span className="ml-2">Order Tracking</span>
            </p>
            <p className="flex items-center hover:text-gray-500 duration-300 cursor-pointer">
              <MdLocationOn className="text-2xl" />
              <span className="ml-2">Help & Support</span>
            </p>
          </div>
        </div>
        {/* =====END PROFILE END===== */}
      </div>
    </div>
  );
};

export default Footer;
