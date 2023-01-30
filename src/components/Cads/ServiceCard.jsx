import React from "react";

export default function ServiceCard({ icon, text }) {
  return (
    <div className="serviceCard mx-1 flex flex-col justify-center items-center px-10 py-5">
      <span>
        <img src={icon} alt={text} />
      </span>
      <span className="text-black text-center mt-2 font-semibold">{text}</span>
    </div>
  );
}
