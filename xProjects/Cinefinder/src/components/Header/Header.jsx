import React from "react";
import Logo from "../Logo";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-[1000px] bg-[#FFDD4A] h-[45px] flex items-center justify-between mt-1 rounded-[5px] mr-[10px] ml-[10px] drop-shadow-gray-500/50">
        <div className="mx-10">
          <Logo />
        </div>
        <div className="flex justify-between">
        <div className="mx-5">About</div>

        <div className="mx-5">Contact</div>
        <div className="mx-5">Home</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
