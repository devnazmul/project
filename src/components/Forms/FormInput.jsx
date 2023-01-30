import React from "react";

export default function FormInput({ placeholder, type, name,extra_class }) {
  return (
    <>
      <input
        type={type}
        className={`formGlassInput ${extra_class}`}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
}
