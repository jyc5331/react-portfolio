import React from "react";
import Headshot from "../../assets/headshot.jpg";
import Luther from "../../assets/luther.jpg";
import Pottery from "../../assets/pottery.jpg";
import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card, Grid } from "grommet";

const About = () => (
  <Grommet theme={grommet}>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">
      Howdy there. My name is Joseph Cosgrove, and I'm a junior software
      developer looking for the right team to hone my skills with. I have
      backgrounds in classical music and pottery, and I hope to apply the
      tenacity and consistency I practice in those pursuits to coding. My
      primary focus in web development is making apps that are intuitive,
      beautiful, and serve the consumer's needs. As a collaborator I am a firm
      believer in communicating with the client, keeping a level head in any
      environment, and being flexible with learning and incorporating new
      technologies. I owe a lot of my patience to my dog and companion, Luther.{" "}
    </Main>
    <Grid
      gap="large"
      rows="fit"
      columns={{ count: "fit", size: ["small", "medium"] }}
    >
      <Card height="fill" width="400px" background="light-1" margin="medium">
        <img src={Headshot} alt="Joseph's headshot" />
      </Card>
      <Card height="medium" width="medium" background="light-1" margin="medium">
        <img
          src={Luther}
          alt="Joseph's dog, Luther. A large German Shepherd Dog with a black coat."
        />
      </Card>
      <Card height="450px" width="medium" background="light-1" margin="medium">
        <img
          src={Pottery}
          alt="An example of one of Joseph's pots. A 5 pound grey stoneware vase with dark glaze and a metallic blue rim."
        />
      </Card>
    </Grid>
  </Grommet>
);

export default About;
