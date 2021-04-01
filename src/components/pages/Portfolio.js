import React from "react";
import WellnessJourney from "../../assets/wellness.png";
import BudgetApp from "../../assets/budget-app.png";
import Gist from "../../assets/gist.png";
import HolidayCheer from "../../assets/holiday-cheer.png";
import SocialMedia from "../../assets/social-media.png";
import Weather from "../../assets/weather.png";
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
    image: "../../assets/wellness.png",
    href: "https://github.com/Gintstir/My-Wellness-Journey/branches",
    alt:
      "A full stack application designed to help users with tracking their varying states of wellness. There are exercises, reminders to drink water, and a graph that tracks self-perception of wellness with user input",
  },
];

//USE STACKED CARDS FROM GROMMET

const Portfolio = () => {
  //change this to parenthesis if Grommet doesn't work
  // <div>
  //   <h1>Portfolio</h1>
  //   <div>
  //     <a href="https://github.com/Gintstir/My-Wellness-Journey/branches">
  //       {" "}
  //       My Wellness Journey
  //     </a>
  //     <img
  //       src={WellnessJourney}
  //       alt="A full stack application designed to help users with tracking their varying states of wellness. There are exercises, reminders to drink water, and a graph that tracks self-perception of wellness with user input"
  //       height={400}
  //       width={400}
  //     />
  //   </div>
  //   <div>
  //     <a href="https://github.com/jyc5331/budget-tracker"> Budget Tracker</a>
  //     <img
  //       src={BudgetApp}
  //       alt="A full stack application that allows the user to track their budget on and offline. This application can be downloaded as a native application."
  //       height={400}
  //       width={400}
  //     />
  //   </div>
  //   <div>
  //     <a href="https://gist.github.com/jyc5331/3833dccd4e5fe9374bc68d98fb31b0fd">
  //       Regex Gist
  //     </a>
  //     <img
  //       src={Gist}
  //       alt="A github gist written by Joseph that demonstrates an understanding of Regex syntax."
  //       height={400}
  //       width={400}
  //     />
  //   </div>
  //   <div>
  //     <a href="https://github.com/jyc5331/holiday-cheer"> Holiday Cheer</a>
  //     <img
  //       src={HolidayCheer}
  //       alt="A front end application designed to spread holiday cheer year-round. It is a front-end website that uses API calls and user input to dynamically interact with the DOM."
  //       height={400}
  //       width={400}
  //     />
  //   </div>
  //   <div>
  //     <a href="https://github.com/jyc5331/social-network-api"> Social Media</a>
  // <img
  //   src={SocialMedia}
  //   alt="A back end application that uses insomnia core to display its express routes in action"
  //   height={400}
  //   width={400}
  // />
  //   </div>
  //   <div>
  //     <a href="https://github.com/jyc5331/weather-api"> Weather Tracker</a>
  //     <img
  //       src={Weather}
  //       alt="A front end application that uses API calls and user input to dynamically generate the DOM. The application gives the current forecast and a five-day forecast."
  //       height={400}
  //       width={400}
  //     />
  //   </div>
  // </div>

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
}; //remove this is Grommet doesn't work

export default Portfolio;
