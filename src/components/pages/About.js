import React from "react";
import Headshot from "../../assets/headshot.jpg";
import { Header, Menu } from "grommet";
//I'm keeping the lines 5-6 as notes
// import { Java } from "grommet-icons";
/* <Button icon={<Java />} hoverIndicator /> */

const About = () => (
  <div>
    {/* <Header background="brand">Hello Header</Header> */}
    <h1>About Me</h1>
    <p>
      Howdy there. My name is Joseph Cosgrove, and I'm a junior software
      developer looking for the right team to hone my skills with. I have
      backgrounds in classical music and pottery, and I hope to apply the
      tenacity and consistency I practice in those pursuits to coding. My
      primary focus in web development is making apps that are intuitive,
      beautiful, and serve the consumer's needs. As a collaborator I am a firm
      believer in communicating with the client, keeping a level head in any
      environment, and being flexible with learning and incorporating new
      technologies. I owe a lot of my patience to my dog and companion, Luther.
    </p>
    <div>
      <img src={Headshot} alt="Joseph's headshot" height={600} width={400} />
    </div>
  </div>
);

export default About;
