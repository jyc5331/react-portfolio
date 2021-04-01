import React from "react";
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
} from "grommet";
import { grommet } from "grommet/themes";

function NavTabs(props) {
  const tabs = ["About", "Portfolio", "Resume", "Contact"];
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
  // <Grommet theme={grommet}>
  //   <Header background="dark-1" pad="medium">
  //     <Box direction="row" align="center" gap="small">
  //       Joseph Cosgrove{" "}
  //     </Box>
  //     <ResponsiveContext.Consumer>
  //       {(responsive) =>
  //         responsive === "small" ? (
  //           <Menu
  //             label="Click me"
  //             items={[
  //               { label: "About", onClick: () => {} },
  //               { label: "Portfolio", onClick: () => {} },
  //               { label: "Resume", onClick: () => {} },
  //               { label: "Contact", onClick: () => {} },
  //             ]}
  //           />
  //         ) : (
  //           <Nav direction="row">
  //             <Anchor href="#about" label="About" />
  //             <Anchor href="#portfolio" label="Portfolio" />
  //             <Anchor href="#resume" label="Resume" />
  //             <Anchor href="#contact" label="Contact" />
  //           </Nav>
  //         )
  //       }
  //     </ResponsiveContext.Consumer>
  //   </Header>
  // </Grommet>
  // );
}

export default NavTabs;
