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
  handler,
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
            onChange={handler}
            rows={10}
            className={`formGlassInput ${extra_class}`}
            placeholder={placeholder}
            name={name}
          />
        </>
      ) : component === "select" ? (
        <>
          <select
            onChange={handler}
            className={`outline-none formGlassInput ${extra_class}`}
            name={name}
          >
            <option value={null}>Select {name}</option>
            {selectItemArray?.map((opt, i) => (
              <option key={i} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          {label && (
            <label
              className="outline-none font-semibold text-sm"
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <input
            onChange={handler}
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
