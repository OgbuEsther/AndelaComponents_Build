import React from "react";
import styled from "styled-components";
import bg from "./ASSESTS/Andela3.png";

const Comp5 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <DivOne>
            <h1>
              Build a brilliant remote team <br /> quickly
            </h1>
            <p>
              We specialize in helping our highly-skilled, global technology
              talent <br /> community connect with hundreds of leading
              companies.
            </p>
            <Button wd="250px" br="" bc="#56C870">
              <Tex>Build Your Dream Team</Tex>
            </Button>
            <p>Get the Enterprise Advantage &gt;</p>
          </DivOne>
          <DivTwo>
            <Icon>
              <Circle>
                <p>1</p>
              </Circle>

              <Line></Line>

              <Circle>
                <p>2</p>
              </Circle>
              <Line></Line>
              <Circle>
                <p>3</p>
              </Circle>
              {/* <Line></Line> */}
            </Icon>
            <Txt>
              <h1>Smart skill matching</h1>
              <p>
                Our intuitive machine learning and AI platform finds you the
                best match for any role.
              </p>
              <h1>Meet the best talent</h1>
              <p>
                Easily schedule interviews and meet top technologists that fit
                within your team.
              </p>
              <h1>Continued excellence</h1>
              <p>
                Integrate your new team members quickly and effectively. Let us
                manage payroll and compliance.
              </p>
            </Txt>
          </DivTwo>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp5;

const Txt = styled.div`
  margin-left: 30px;
  h1 {
    color: white;
    font-size: 22px;
  }

  p {
    color: white;
    margin-bottom: 60px;
  }
`;

const Icon = styled.div`
  /* background-color: blue; */
`;

const Line = styled.div`
  width: 2px;
  height: 70px;
  margin-left: 35px;
  background-color: white;

  left: 7%;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
  position: relative;

  p {
    position: absolute;
    margin-top: 25px;
    margin-left: 25px;

    font-size: xx-large;
    color: white;
  }
`;

const Tex = styled.div`
  font-size: 16px;
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

  :hover {
    transform: scale(0.95);
    transition: all ease-in-out 450ms;
  }
`;

const DivTwo = styled.div`
  width: 40%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  /* background-color: cyan; */
`;

const DivOne = styled.div`
  width: 50%;
  height: 100%;
  margin-left: 20px;

  h1 {
    color: white;
    font-size: 50px;
    font-weight: 100;
    font-family: "Inria Serif", serif;
  }

  p {
    color: white;
    font-weight: 100;
    font-size: 18px;
  }
  /* background-color: aqua; */
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  /* background-color: blue; */
  justify-content: space-between;
`;

const Container = styled.div`
  height: 700px;
  width: 100%;
  background-color: black;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  position: relative;
  background-attachment: fixed;
`;
