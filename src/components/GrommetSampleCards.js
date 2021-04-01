import React from "react";

import {
  Avatar,
  Box,
  Card,
  Heading,
  CardBody,
  CardHeader,
  Grid,
  Grommet,
  Text,
  Image,
  Stack,
} from "grommet";

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  heading: { font: { family: "Comic Sans MS" } },
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
    project: "My Wellness Journey",
    image: "MyWellnessJourney",
    href: "https://github.com/Gintstir/My-Wellness-Journey/branches",
    alt:
      "A full stack application designed to help users with tracking their varying states of wellness. There are exercises, reminders to drink water, and a graph that tracks self-perception of wellness with user input",
  },
];

export const Stacked = () => {
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
                  background="#000000A0"
                  width="medium"
                  justify="start"
                >
                  <Box>
                    <a href={item.href}>
                      <Heading level="3" margin="none">
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
