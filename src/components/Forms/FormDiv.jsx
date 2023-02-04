import React from "react";

export default function FormDiv({children,custom_class}) {
  return (
    <div className={`heroFormGlassDiv px-5 py-2 md:px-10 md:py-3 ${custom_class}`}>
      {children}
    </div>
  );
}
