import React from "react";
import pdf from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <div className="m-5">
      <p>
        <strong>Technical Skills:</strong> JavaScript | React | HTML | CSS |
        MySQL | Git | Node | Express | Bootstrap | MongoDB | GraphQL
      </p>
      <p>If you'd like to check out my resume, click the button below.</p>
      <a href={pdf} download>
        <button>download resume</button>
      </a>
    </div>
  );
}
