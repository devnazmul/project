import React from "react";

export default function WhiteNewmorfButton({title,handler}) {
  return (
      <button className="newMorf mx-2" onClick={handler}>{title}</button>
  );
}
