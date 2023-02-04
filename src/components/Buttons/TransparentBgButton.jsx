import React from "react";

export default function TransparentBgButton({ title, handler }) {
  return <button className="text-sm sm:text-md mx-1 sm:mx-2 font-[700]" onClick={handler}>{title}</button>;
}
