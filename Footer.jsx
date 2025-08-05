import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-50 h-60  border-white border-y-2">
       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 h-3/4">
        {/* Logo & Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold hover:text-amber-400">DevConnect</h2>
          <p className="text-sm text-gray-400">Developers for developers</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm mt-4 md:mt-0">
          <a href="/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/explore" className="hover:text-green-400 transition">Explore</a>
          <a href="/messages" className="hover:text-green-400 transition">Messages</a>
          <a href="/about" className="hover:text-green-400 transition">About</a>
          <a href="/privacyTerms" className="hover:text-green-400 transition">Privacy Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;