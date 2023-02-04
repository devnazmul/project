import React from "react";

export default function ServiceCard({ icon, text }) {
  return (
    <div title={text} className="serviceCard mx-1 flex flex-col justify-center items-center px-3 py-2 lg:px-10 lg:py-5">
      <img className="" src={icon} alt={text} />

      <span className="text-black text-center mt-2 font-semibold hidden md:block">
        {text}
      </span>
    </div>
  );
}
