import React from "react";
import { RiLoader4Line } from "react-icons/ri";

export default function PurpleNewmorfButton({
  handler,
  title,
  extra_class,
  isLoading,
}) {
  return (
    <button
      title={title}
      className={`newMorfPurple ${extra_class}`}
      onClick={handler}
    >
      {isLoading ? (
        <span className="flex gap-2 items-center justify-center">
          <RiLoader4Line className="text-xl animate-spin" /> {title}
        </span>
      ) : (
        <>{title}</>
      )}
    </button>
  );
}
