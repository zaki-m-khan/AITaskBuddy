import React from "react";
import Logo from "./Logo";

function Header({ onNavigate }) {
  return (
    <header className="flex justify-between items-center px-20 py-6 mx-auto my-0 max-w-[1440px] max-md:px-10 max-md:py-6">
      <div className="flex gap-3 items-center">
        <Logo />
        <h1 className="text-2xl font-bold text-indigo-900 max-sm:text-xl">
          AI Task Buddy
        </h1>
      </div>
      <nav className="flex gap-6 max-sm:hidden">
        <a href="#" className="text-lg text-gray-700 no-underline">
          About
        </a>
        <a href="#" className="text-lg text-gray-700 no-underline">
          Features
        </a>
        <a href="#" className="text-lg text-gray-700 no-underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
