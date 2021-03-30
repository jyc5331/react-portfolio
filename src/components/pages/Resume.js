import React from "react";
import ResumeScreenshot from "../../assets/resumescreenshot.png";
const Resume = () => (
  <div>
    <h1>Resume</h1>
    <p>
      Notable proficiences: Mobile-first development, Full Stack Development,
      MERN development
      <div>
        <a href={ResumeScreenshot} download="JDCC-Resume-2021">
          <img
            src={ResumeScreenshot}
            alt="Joseph's Resume"
            height={600}
            width={400}
          />
        </a>
      </div>
    </p>
  </div>
);

export default Resume;
