import React from "react";
import styled from "styled-components";
import image from "./ASSESTS/header.png";
import images from "./ASSESTS/AndelaLogo.svg";
import images2 from "./ASSESTS/AndelaLogo2.svg";

const Hero = () => {
  const [show, setShow] = React.useState<Boolean>(false);

  const changeNav = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <Container>
      {show ? (
        <Head bg="white">
          <Right>
            <Images src={images2} />
          </Right>
          <Mid>
            <Navs col="black">For Technology Experts</Navs>
            <Navs col="black">Business</Navs>
            <Navs col="black">Enterprise</Navs>
            <Navs col="black">About Us</Navs>
          </Mid>
          <Lef>
            <Button2 cl="black" wd="180px" br="1px solid black" bc="">
              <Text>Apply for Jobs</Text>
            </Button2>
            <Button2 cl="" wd="150px" br="" bc="#56C870">
              <Text1>Hire Talents</Text1>
            </Button2>
          </Lef>
        </Head>
      ) : (
        <Head bg="">
          <Right>
            <Images src={images} />
          </Right>
          <Mid>
            <Navs col="white">For Technology Experts</Navs>
            <Navs col="white">Business</Navs>
            <Navs col="white">Enterprise</Navs>
            <Navs col="white">About Us</Navs>
          </Mid>
          <Lef>
            <Button2 cl="white" wd="180px" br="1px solid white" bc="">
              <Text>Apply for Jobs</Text>
            </Button2>
            <Button2 cl="" wd="150px" br="" bc="#56C870">
              <Text1>Hire Talents</Text1>
            </Button2>
          </Lef>
        </Head>
      )}
      <Top>
        Discover <span>brilliant talent</span> <br /> around the world
      </Top>
      <P>
        Join Andela to build your team with developers, engineers, product
        designers, and the best remote technology experts.
      </P>
      <Left>
        <Button wd="180px" br="" bc="#56C870">
          <Tex>Hire Talents</Tex>
        </Button>
        <Button wd="200px" br="" bc="white">
          <Tex1>Apply for Jobs</Tex1>
        </Button>
      </Left>
    </Container>
  );
};

export default Hero;
const Text = styled.div`
  font-size: 19px;
  /* color: white; */
`;
const Text1 = styled.div`
  font-size: 20px;
`;
const Button = styled.div<{ wd: string; br: string; bc: string }>`
  width: ${(props) => props.wd};
  height: 70px;
  border-radius: 50px;
  border: ${(props) => props.br};
  background-color: ${(props) => props.bc};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 60px;
  width: 410px;
  justify-content: space-between;
  z-index: 999;
`;
const P = styled.div`
  color: white;
  margin-left: 40px;
  font-size: 18px;
  z-index: 999;
`;
const Top = styled.h1`
  font-style: italic;
  font-size: 55px;
  font-weight: 600;
  color: white;
  margin-left: 40px;
  margin-top: 200px;
  z-index: 999;
  span {
  }
`;
const Container = styled.div`
  height: 700px;
  width: 100%;
  background-color: black;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  position: relative;
  background-attachment: fixed;
`;
const Tex1 = styled.div`
  font-size: 19px;
`;
const Tex = styled.div`
  font-size: 20px;
`;
const Button2 = styled.div<{ wd: string; br: string; bc: string; cl: string }>`
  width: ${(props) => props.wd};
  height: 40px;
  border-radius: 50px;
  border: ${(props) => props.br};
  background-color: ${(props) => props.bc};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;
  color: ${(props) => props.cl};
`;

const Lef = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 40px;
`;

const Navs = styled.div<{ col: string }>`
  font-size: 20px;
  margin-left: 60px;
  /* color: white; */
  display: flex;
  color: ${(props) => props.col};
`;

const Mid = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Images = styled.img``;

const Right = styled.div`
  width: 190px;
  height: 100%;
  align-items: center;
  display: flex;
  margin-left: 30px;
`;

const Head = styled.div<{ bg: string }>`
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  z-index: 999999;
  position: fixed;

  background-color: ${(props) => props.bg};
`;
