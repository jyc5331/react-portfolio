import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { Grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "Roboto",
      size: "16px",
    },
  },
});

const App = () => (
  <Grommet theme={theme}>
    <PortfolioContainer />
  </Grommet>
);

export default App;
