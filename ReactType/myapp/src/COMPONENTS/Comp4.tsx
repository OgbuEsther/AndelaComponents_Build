import React from "react";
import styled from "styled-components";
import One from "./ASSESTS/Andela2.png";
import { AiOutlineCheck } from "react-icons/ai";

const Comp4 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <DivTwo>
            <h4>Empower your future</h4>
            <h1>
              Why the world’s best
              <br /> talent prefers Andela
            </h1>
            <Wrap>
              <First>
                <Icon>
                  <AiOutlineCheck />
                </Icon>
                <p>Long-term placements</p>
              </First>
              <First>
                <Icon>
                  <AiOutlineCheck />
                </Icon>
                <p>Trusted career partner</p>
              </First>
              <First>
                <Icon>
                  <AiOutlineCheck />
                </Icon>
                <p>Career Guidance</p>
              </First>
              <First>
                <Icon>
                  <AiOutlineCheck />
                </Icon>
                <p>96% match success</p>
              </First>
            </Wrap>
            <br />
            <br />
            <Button wd="200px" br="" bc="#56C870">
              <Tex>Build Your Team</Tex>
            </Button>
          </DivTwo>
          <DivOne>
            <Image src={One} />
          </DivOne>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp4;

const First = styled.div`
  display: flex;
  /* justify-content: ; */
  align-items: center;
  /* background-color: blueviolet; */
`;

const Icon = styled.div`
  color: green;
  margin-right: 10px;
  font-size: large;
`;

const Wrap = styled.div`
  margin: 0px 0px 0px 0px;
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

const Tex = styled.div`
  font-size: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const DivTwo = styled.div`
  width: 40%;
  height: 100%;

  h4 {
    font-weight: 700;
  }

  h1 {
    font-family: "Inria Serif", "Garamond", serif;
    /* clear: both; */
    margin: 0px 0px 30px 0px;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
  }

  p {
    font-family: "Inria Serif", "Garamond", serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
  }
  /* background-color: thistle; */
`;
const DivOne = styled.div`
  width: 60%;
  height: 100%;
  /* background-color: sienna; */
`;
const Holder = styled.div`
  width: 90%;
  height: 430px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  margin-bottom: 100px;
  /* background-color: green; */
`;
