import React from "react";
import { Grommet as GrommetIcon, Github, Slack, Linkedin } from "grommet-icons";

import { Anchor, Box, Footer, grommet, Grommet, Text } from "grommet";

// const Footer = () => (
// <div>
//   <a href="https://github.com/jyc5331">GitHub</a>
//   <a href="https://www.linkedin.com/in/joseph-cosgrove-72a38437/">LinkedIn</a>
//   <a href="url">A third Profile</a>
// </div>

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://github.com/jyc5331"
      icon={<Github color="brand" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.slack.com/"
      icon={<Slack color="brand" />}
    />
    <Anchor
      a11yTitle="Find me on Linkedin"
      href="https://www.linkedin.com/in/joseph-cosgrove-72a38437/"
      icon={<Linkedin color="brand" />}
    />
  </Box>
);

export const SocialBar = () => (
  <Grommet theme={grommet}>
    <Footer background="light-4" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Styled with Grommet
        </Text>
      </Box>
      <Media />
      <Text textAlign="center" size="small">
        <a href="mailto:jcosgrovecoding@gmail.com">jcosgrovecoding@gmail.com</a>
      </Text>
    </Footer>
  </Grommet>
);

export default SocialBar;
