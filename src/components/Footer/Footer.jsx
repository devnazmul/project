import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

export default function Footer() {
    
  return (
    <footer className="w-full bg-white h-[120px] flex px-5 xl:px-36 justify-between items-center">
      <span className="text-black font-[16px]">www.bikefixup.in</span>
      <span className="text-black flex justify-between items-center w-[100px] md:w-2/12">
        <a href="https://google.com">
          <FaFacebookSquare className="text-[30px]" />
        </a>
        <a href="https://google.com">
          <RiWhatsappFill className="text-[30px]" />
        </a>
        <a href="https://google.com">
          <AiFillInstagram className="text-[30px]" />
        </a>
      </span>
    </footer>
  );
}
