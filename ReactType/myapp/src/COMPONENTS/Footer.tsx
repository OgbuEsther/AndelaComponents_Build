import React from "react";
import { IoLogoDesignernews } from "react-icons/io";
import styled from "styled-components";

import LogoPic from "./ASSESTS/AndelaLogo.svg";

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Div1>
            <Logo src={LogoPic} />
            <IconHold></IconHold>
          </Div1>
          <Div2>
            <One>
              <h4>Discover Talent</h4>

              <Nav>For Companies</Nav>
              <Nav>Enterprise</Nav>
              <Nav> Case studies</Nav>
              <Nav></Nav>
            </One>
            <Two>
              <h4>Find Work</h4>
              <Nav>For Technologists</Nav>
              <Nav>Learning Community</Nav>
              <Nav>Leadership Program</Nav>
              <Nav>Resources</Nav>
            </Two>
            <Three>
              <h4>Andela</h4>
              <Nav>About us</Nav>
              <Nav>Events</Nav>
              <Nav>Blog</Nav>
              <Nav>Press Center</Nav>
              <Nav>Careers</Nav>
            </Three>
            <Four>
              <h4></h4>
              <Nav>Privacy Policy</Nav>
              <Nav>Terms and Conditions</Nav>
              <Nav>Modern Slavery Statement</Nav>
              <Nav></Nav>
            </Four>
          </Div2>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
`;

const Nav = styled.div``;

const One = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: orange; */
`;

const Two = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: aqua; */
`;

const Three = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: orchid; */
`;

const Four = styled.div`
  width: 20%;
  height: 100%;
  /* background-color: olivedrab; */
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
`;

const IconHold = styled.div``;

const Div1 = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 30px;
  /* background-color: purple; */
`;

const Div2 = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: pink; */

  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: #173b3f;

  display: flex;
  justify-content: center;
  align-items: center;
`;
