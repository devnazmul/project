import React from "react";

export default function TransparentBgButton({ title, handler }) {
  return <button className="mx-2 font-[700]" onClick={handler}>{title}</button>;
}
