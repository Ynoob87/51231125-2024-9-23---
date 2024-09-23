import React from "react";

const links = [
  { href: "#", label: "首頁" },
  { href: "#", label: "關於我們" },
  { href: "#", label: "服務" },
  { href: "#", label: "聯絡我們" },
];

const linkClassName =
  "my-[0px] mx-[15px] decoration-transparent text-black hover:text-pink-300";

const NavBar = () => {
  return (
    <nav className="text-pink-300 mt-[10px] mb-[0px] text-center flex justify-center">
      {links.map((link, index) => (
        <a key={index} href={link.href} className={linkClassName}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
