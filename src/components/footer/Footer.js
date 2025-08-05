import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2235] text-white px-6 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🔹 Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
          <p className="mb-2">
            NINAKABBO 227/A Tejgaon-Gulshan Link Road <br />
            Postal Code: 1208 Dhaka, Bangladesh
          </p>
          <p className="mb-2">+880177758704, +880177758713</p>
          <p className="mb-4">hello@sailor.com.bd</p>
          <div className="flex gap-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* 🔹 Know Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">KNOW US</h3>
          <ul className="space-y-2">
            <li>Who We Are</li>
            <li>Sailor Club</li>
            <li>Brand Social Responsibilities (BSR)</li>
            <li>Join Us</li>
          </ul>
        </div>

        {/* 🔹 Shopping Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">SHOPPING INFORMATION</h3>
          <ul className="space-y-2">
            <li>Privacy Policy Page</li>
            <li>Size Guide</li>
            <li>How To Shop</li>
          </ul>
        </div>

        {/* 🔹 Service Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">SERVICE INFORMATION</h3>
          <ul className="space-y-2">
            <li>Return And Exchange</li>
            <li>Shipping & Charges</li>
            <li>Customer Service</li>
            <li>Terms And Conditions</li>
            <li>Store Locator</li>
          </ul>
        </div>
      </div>

      {/* 🔸 Copyright */}
      <div className="md:text-center text-sm text-gray-400 pt-4 border-t border-gray-400 mt-10">
        <div className="flex md:justify-between gap-3 flex-col md:flex-row ">
          <h2 className="text-gray-300">
            {" "}
            Copyright ©2025 Sailor. All rights reserved
          </h2>
          <h2 className="text-gray-300 ">
            system design & developed by :{" "}
            <span className="text-red-600">Asif Hosen.</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
