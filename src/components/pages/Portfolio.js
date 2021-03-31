import React from "react";
import WellnessJourney from "../../assets/wellness.png";
import BudgetApp from "../../assets/budget-app.png";
import Gist from "../../assets/gist.png";
import HolidayCheer from "../../assets/holiday-cheer.png";
import SocialMedia from "../../assets/social-media.png";
import Weather from "../../assets/weather.png";

const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <div>
      <a href="https://github.com/Gintstir/My-Wellness-Journey/branches">
        {" "}
        My Wellness Journey
      </a>
      <img
        src={WellnessJourney}
        alt="A full stack application designed to help users with tracking their varying states of wellness. There are exercises, reminders to drink water, and a graph that tracks self-perception of wellness with user input"
        height={400}
        width={400}
      />
    </div>
    <div>
      <a href="https://github.com/jyc5331/budget-tracker"> Budget Tracker</a>
      <img
        src={BudgetApp}
        alt="A full stack application that allows the user to track their budget on and offline. This application can be downloaded as a native application."
        height={400}
        width={400}
      />
    </div>
    <div>
      <a href="https://gist.github.com/jyc5331/3833dccd4e5fe9374bc68d98fb31b0fd">
        Regex Gist
      </a>
      <img
        src={Gist}
        alt="A github gist written by Joseph that demonstrates an understanding of Regex syntax."
        height={400}
        width={400}
      />
    </div>
    <div>
      <a href="https://github.com/jyc5331/holiday-cheer"> Holiday Cheer</a>
      <img
        src={HolidayCheer}
        alt="A front end application designed to spread holiday cheer year-round. It is a front-end website that uses API calls and user input to dynamically interact with the DOM."
        height={400}
        width={400}
      />
    </div>
    <div>
      <a href="https://github.com/jyc5331/social-network-api"> Social Media</a>
      <img
        src={SocialMedia}
        alt="A back end application that uses insomnia core to display its express routes in action"
        height={400}
        width={400}
      />
    </div>
    <div>
      <a href="https://github.com/jyc5331/weather-api"> Weather Tracker</a>
      <img
        src={Weather}
        alt="A front end application that uses API calls and user input to dynamically generate the DOM. The application gives the current forecast and a five-day forecast."
        height={400}
        width={400}
      />
    </div>
  </div>
);

export default Portfolio;
