import React from "react";

export default function FormDiv({children}) {
  return (
    <div className="heroFormGlassDiv px-5 py-2 md:px-10 md:py-3">
      {children}
    </div>
  );
}
