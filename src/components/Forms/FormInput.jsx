import React from "react";

export default function FormInput({
  placeholder,
  type,
  name,
  extra_class,
  component,
  row,
}) {
  return (
    <>
      {component === "textarea" ? (
        <textarea
          rows={10}
          className={`formGlassInput ${extra_class}`}
          placeholder={placeholder}
          name={name}
        />
      ) : (
        <input
          type={type}
          className={`formGlassInput ${extra_class}`}
          placeholder={placeholder}
          name={name}
        />
      )}
    </>
  );
}
