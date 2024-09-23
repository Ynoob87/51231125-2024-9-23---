"use client";

import React from "react";
import { links } from "../constants";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-custom1 w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-main font-bold text-xl">範例網站</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-main hover:text-primary-pink transition duration-300 ease-in-out py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button className="text-main hover:text-primary-pink">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
