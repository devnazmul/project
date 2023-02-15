import React from "react";

export default function AboutSimpleCard({ title, paragraph }) {
  return (
    <div className="aboutGlass pt-8 px-10 w-full lg:w-[470px] mb-5">
      <h5 className="text-xl font-semibold text-center mb-5">{title}</h5>
      <p className="font-normal">
        {paragraph.split(".").map((p) => (
          <>
            <>{p}</>
            <br />
            <br />
          </>
        ))}
      </p>
    </div>
  );
}
