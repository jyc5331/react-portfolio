import React from "react";

function NavTabs(props) {
  const tabs = ["About", "Portfolio", "Resume", "Contact", "Footer"];
  return (
    <ul className="nav nav-tabs">
      <h2>Joseph Cosgrove</h2>
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
