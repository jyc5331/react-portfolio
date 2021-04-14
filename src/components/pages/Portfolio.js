import React from "react";

import {
  Box,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Grid,
  Grommet,
  Image,
  Stack,
} from "grommet";

const theme = {
  heading: { font: { family: "Roboto" } },
  card: {
    container: {
      elevation: "large",
    },
    footer: {
      pad: "medium",
    },
  },
};

const data = [
  {
    project: "Tea App",
    image: require("../../assets/tea-app.png").default,
    href: "https://github.com/Gintstir/Tea-App",
    alt:
      "A full stack application designed with 2020 MERN practices. A single user or social media application about tea that allows users to login, create recipe cards, and curate a feed of their own tea photos",
  },
  {
    project: "My Wellness Journey",
    image: require("../../assets/wellness.png").default,
    href: "https://github.com/Gintstir/My-Wellness-Journey",
    alt:
      "A full stack application designed to help users with tracking their varying states of wellness. There are exercises, reminders to drink water, and a graph that tracks self-perception of wellness with user input",
  },
  {
    project: "Budget App",
    image: require("../../assets/budget-app.png").default,
    href: "https://github.com/jyc5331/budget-tracker",
    alt:
      "A full stack application that allows the user to track their budget on and offline. This application can be downloaded as a native application.",
  },
  {
    project: "Regex Gist",
    image: require("../../assets/gist.png").default,
    href: "https://gist.github.com/jyc5331/3833dccd4e5fe9374bc68d98fb31b0fd",
    alt:
      "A github gist written by Joseph that demonstrates an understanding of Regex syntax.",
  },
  {
    project: "Social Media",
    image: require("../../assets/social-media.png").default,
    href: "https://github.com/jyc5331/social-network-api",
    alt:
      "A back end application that uses Insomnia Core to display its express routes in action",
  },
  {
    project: "Holiday Cheer",
    image: require("../../assets/holiday-cheer.png").default,
    href: "https://github.com/jyc5331/holiday-cheer",
    alt:
      "A front end application designed to spread holiday cheer year-round. It is a front-end website that uses API calls and user input to dynamically interact with the DOM.",
  },
  {
    project: "Weather Forecast",
    image: require("../../assets/weather.png").default,
    href: "https://github.com/jyc5331/weather-api",
    alt:
      "A front end application that uses API calls and user input to dynamically generate the DOM. The application gives the current forecast and a five-day forecast.",
  },
];

const Portfolio = () => {
  return (
    <Grommet theme={theme}>
      <Box pad="large">
        <Grid
          gap="large"
          rows="medium"
          columns={{ count: "fit", size: ["small", "medium"] }}
        >
          {data.map((item) => (
            <Card width="medium" key={item.project}>
              {/* Stacked CardBody and CardHeader on top of each other 
              in that order */}
              <Stack anchor="bottom-left">
                <CardBody height="medium">
                  <Image fit="cover" src={item.image} a11yTitle={item.alt} />
                </CardBody>
                <CardHeader
                  pad={{ horizontal: "small", vertical: "small" }}
                  // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                  background="#000000"
                  width="medium"
                  justify="start"
                >
                  <Box>
                    <a href={item.href}>
                      <Heading level="3" margin="none" color="white">
                        {item.project}
                      </Heading>
                    </a>
                  </Box>
                </CardHeader>
              </Stack>
            </Card>
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default Portfolio;
