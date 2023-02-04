import React from "react";

export default function FormInput({
  placeholder,
  type,
  name,
  extra_class,
  component,
  row,
  label,
}) {
  return (
    <>
      {component === "textarea" ? (
        <>
          {label && <label className="font-semibold text-sm" htmlFor={name}>{label}</label>}
          <textarea
            rows={10}
            className={`formGlassInput ${extra_class}`}
            placeholder={placeholder}
            name={name}
          />
        </>
      ) : (
        <>
          {label && <label className="font-semibold text-sm" htmlFor={name}>{label}</label>}
          <input
            type={type}
            className={`formGlassInput ${extra_class}`}
            placeholder={placeholder}
            name={name}
          />
        </>
      )}
    </>
  );
}
