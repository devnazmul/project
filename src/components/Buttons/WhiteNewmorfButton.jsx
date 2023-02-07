import React from "react";

export default function WhiteNewmorfButton({title,handler}) {
  return (
      <button  title={title} className="text-sm md:text-md newMorf mx-1 md:mx-2" onClick={handler}>{title}</button>
  );
}
