import React from "react";

export default function USPSCard({ image, text }) {
  return (
    <div className="flex USPSGlass h-[90px] items-center justify-between pl-5">
      <img className="w-[40px] h-[40px] mr-2" src={image} alt={text} />
      <p className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] font-medium w-full pr-5 text-left">{text}</p>
    </div>
  );
}
