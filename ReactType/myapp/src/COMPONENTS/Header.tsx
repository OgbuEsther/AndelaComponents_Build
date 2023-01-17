import React from "react";
import styled from "styled-components";
import pic from "./ASSESTS/AndelaLogo.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <LogoWrap>
          <Logo src={pic} />
        </LogoWrap>
        <NavHold>
          <Nav>For Technology Experts</Nav>
          <Nav> Business</Nav>
          <Nav>Enterprise</Nav>
          <Nav>About Us</Nav>
        </NavHold>
        <ButtonHold>
          <Button bd="1px solid black" bg="" wd="150px">
            Apply for Jobs
          </Button>
          <Button bd="" bg="lightgreen" wd="120px">
            Hire Talents
          </Button>
        </ButtonHold>
      </Container>
    </div>
  );
};

export default Header;

const LogoWrap = styled.div``;

const Logo = styled.img`
  height: 50px;
  margin-right: 50px;
`;
const Nav = styled.div`
  margin-left: 40px;
  font-size: 20px;
  color: black;
  font-weight: 400;
`;

const ButtonHold = styled.div`
  display: flex;
`;
const Button = styled.div<{ wd: string; bg: string; bd: string }>`
  width: ${(props) => props.wd};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.bd};
  background-color: ${(props) => props.bg};
  border-radius: 50px;
  cursor: pointer;
  margin-right: 20px;

  :hover {
    transform: scale(0.97);
    transition: all 350ms;
  }
`;

const NavHold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  /* background-color: blue; */
`;

const Holder = styled.div``;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
