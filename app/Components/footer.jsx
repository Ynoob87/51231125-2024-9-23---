import React from "react";
import { links, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary-pink text-white py-6 fixed bottom-0 w-full">
      <h1 className="font-fold text-3xl text-center mb-4">範例網站</h1>
      <div className="container mx-auto text-center">
        <div className="mb-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="mx-3 hover:text-gray-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; 2024 範例網站. 保留所有權利.</p>
      </div>
    </footer>
  );
};

export default Footer;
