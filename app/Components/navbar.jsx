import React from "react";

const NavBar = () => {
  return (
    <nav className="text-green-500 mt-[10px] mb-[0px] text-center flex justify-center">
      <a
        href="#"
        className="my-[0px] mx-[15px] decoration-transparent text-black hover:text-green-400"
      >
        首頁
      </a>
      <a
        href="#"
        className="my-[0px] mx-[15px] decoration-transparent text-black hover:text-green-400"
      >
        關於我們
      </a>
      <a
        href="#"
        className="my-[0px] mx-[15px] decoration-transparent text-black hover:text-green-400"
      >
        服務
      </a>
      <a
        href="#"
        className="my-[0px] mx-[15px] decoration-transparent text-black hover:text-green-400"
      >
        聯絡我們
      </a>
    </nav>
  );
};

export default NavBar;
