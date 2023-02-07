import React from "react";

export default function PurpleNewmorfButton({handler,title,extra_class}) {
  return <button title={title} className={`newMorfPurple ${extra_class}`} onClick={handler}>{title}</button>;
}
