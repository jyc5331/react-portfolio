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
  return (
    <Grommet theme={grommet}>
      <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
          Joseph Cosgrove{" "}
        </Box>
        <ResponsiveContext.Consumer>
          {(responsive) =>
            responsive === "small" ? (
              <Menu
                label="Click me"
                items={[
                  {
                    label: "About",
                    onClick: () => props.handlePageChange("About"),
                  },
                  {
                    label: "Portfolio",
                    onClick: () => props.handlePageChange("Portfolio"),
                  },
                  {
                    label: "Resume",
                    onClick: () => props.handlePageChange("Resume"),
                  },
                  {
                    label: "Contact",
                    onClick: () => props.handlePageChange("Contact"),
                  },
                ]}
              />
            ) : (
              <Nav direction="row">
                <Anchor
                  href="#about"
                  label="About"
                  onClick={() => props.handlePageChange("About")}
                />
                <Anchor
                  href="#portfolio"
                  label="Portfolio"
                  onClick={() => props.handlePageChange("Portfolio")}
                />
                <Anchor
                  href="#resume"
                  label="Resume"
                  onClick={() => props.handlePageChange("Resume")}
                />
                <Anchor
                  href="#contact"
                  label="Contact"
                  onClick={() => props.handlePageChange("Contact")}
                />
              </Nav>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );
}

export default NavTabs;
