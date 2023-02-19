import React from "react";

export default function FormInput({
  placeholder,
  type,
  name,
  extra_class,
  component,
  row,
  label,
  step,
  selectItemArray,
}) {
  return (
    <>
      {component === "textarea" ? (
        <>
          {label && (
            <label className="font-semibold text-sm" htmlFor={name}>
              {label}
            </label>
          )}
          <textarea
            rows={10}
            className={`formGlassInput ${extra_class}`}
            placeholder={placeholder}
            name={name}
          />
        </>
      ) : component === "select" ? (
        <>
          <select className={`outline-none formGlassInput ${extra_class}`} name={name}>
            <option value={null}>Select {name}</option>
            {selectItemArray?.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          {label && (
            <label className="outline-none font-semibold text-sm" htmlFor={name}>
              {label}
            </label>
          )}
          <input
            step={step}
            type={type}
            className={`outline-none formGlassInput ${extra_class} `}
            placeholder={placeholder}
            name={name}
          />
        </>
      )}
    </>
  );
}
