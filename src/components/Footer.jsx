import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 flex justify-center items-center">
      <p className="text-white mt-2 mr-4">© {new Date().getFullYear()} Vivek</p>
      <div className="flex space-x-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/zorovivek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://instagram.com/vivekcdhry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
}

