import { useState } from "react";

export default function Accordion({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        {title}
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && <div className="accordion-body">{content}</div>}
    </div>
  );
}
