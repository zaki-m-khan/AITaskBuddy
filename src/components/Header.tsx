import React from "react";
import { LogoIcon, NotificationIcon } from "./Icons";

const Header: React.FC = () => {
  return (
    <header className="px-6 py-4 bg-white border-b border-solid">
      <div className="flex justify-between items-center mx-auto my-0 max-w-[1440px] max-sm:flex-col max-sm:gap-4">
        <div className="flex gap-3 items-center">
          <LogoIcon />
          <h1 className="text-xl font-bold text-gray-900">
            Job Coach Dashboard
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-5 w-[18px]">
            <NotificationIcon />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7af5e31e4460333e29f949fdd57a5d228908b42"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
