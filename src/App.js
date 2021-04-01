import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { Grommet } from "grommet";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "16px",
      height: "18px",
    },
  },
};

const App = () => (
  <Grommet theme={theme}>
    <PortfolioContainer />
  </Grommet>
);

export default App;
