import React from "react";
import ResumeScreenshot from "../../assets/resumescreenshot.png";
const Resume = () => (
  <div>
    <h1>Resume</h1>
    <p>
      Programing Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL Tools and
      Applications: GitHub, MongoDB, MySQL, Express, React.JS, Node.JS,
      Handlebars, jQuery, AJAX, Bootstrap, and Materialized
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
