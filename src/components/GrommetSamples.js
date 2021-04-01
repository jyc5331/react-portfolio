import React from "react";

import { Grommet as GrommetIcon, Github, Slack, Twitter } from "grommet-icons";

import { Anchor, Box, Footer, grommet, Grommet, Main, Text } from "grommet";

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

export const Social = () => (
  <Grommet theme={grommet}>
    <Main background="light-2" elevation="large" pad="medium" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="light-4" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Grommet
        </Text>
      </Box>
      <Media />
      <Text textAlign="center" size="xsmall">
        ©Copyright
      </Text>
    </Footer>
  </Grommet>
);
