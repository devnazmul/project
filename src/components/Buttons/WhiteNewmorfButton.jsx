import React from "react";

export default function WhiteNewmorfButton({title,handler}) {
  return (
      <button className="text-sm md:text-md newMorf mx-1 md:mx-2" onClick={handler}>{title}</button>
  );
}
