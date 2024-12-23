import React, { useState } from 'react';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
      };
      //console.log(currentUser?.photoURL);

      const handleLogout = async () => {
        try {
          await signOut(auth);
          navigate("/login");
        } catch (err) {
          console.error("Error during logout:", err);
        }
      };
    

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full flex items-center justify-between px-6 pt-4 pb-2 bg-white shadow-sm">
        {/* Left Section */}
        <div className="text-lg font-popins font-bold text-gray-700">
          <span className="text-gray-700">project</span>
          <span className="text-black text-2xl">/Design</span>
        </div>

        {/* Right Section (Profile Dropdown) */}
        <div className="relative">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={`${
                currentUser?.photoURL || "https://via.placeholder.com/150"
              }`}
              alt="Profile"
              className="h-10 w-10 rounded-full border border-gray-300"
            />
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">
                {currentUser?.displayName || "User"}
              </p>
              <p className="text-xs text-gray-500 text-left">Designer</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
       
  )
}
