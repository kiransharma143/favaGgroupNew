import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const TopContactBar = () => {
  return (
    <div className="bg-[#84c23d] text-white py-1.5">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a href="mailto:favaglocal@gmail.com" className="hover:underline">
              favaglocal@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-white" />
            <a href="tel:+919223056246" className="hover:underline">
              +91 92230 56246
            </a>
          </div>
          {/* Uncomment if needed
          <div className="flex items-center gap-2">
            <FaClock className="text-white" />
            Mon - Sat: 9:00 AM - 6:00 PM IST
          </div>
          */}
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 mt-2 lg:mt-0">
          <a
            href="#"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5da0d5]  transition-colors"
          >
            <FaFacebookF className="text-white text-xs" />
          </a>
          <a
            href="#"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5da0d5]  transition-colors"
          >
            <FaYoutube className="text-white text-xs" />
          </a>
          <a
            href="#"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5da0d5]  transition-colors"
          >
            <FaInstagram className="text-white text-xs" />
          </a>
          <a
            href="#"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-[#5da0d5] hover:bg-[#84c23d] transition-colors"
          >
            <FaTwitter className="text-white text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
