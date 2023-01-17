import React from "react";
import styled from "styled-components";
import One from "./ASSESTS/Andela1.png";

const Comp3 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <DivOne>
            <Image src={One} />
          </DivOne>

          <DivTwo>
            <h4>Build your team today</h4>
            <h1>
              We’ve cracked the code on <br /> creating engineering teams
            </h1>
            <p>
              Skilled engineers, product managers, and designers at your
              fingertips. An extensive <br /> list of technical services to suit
              your business needs. Start building your world-class <br /> team
              faster with talent from Andela.
            </p>
            <br />
            <br />
            <Button wd="200px" br="" bc="#56C870">
              <Tex>Build Your Team</Tex>
            </Button>
          </DivTwo>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp3;

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
  width: 50%;
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
  width: 40%;
  height: 100%;
  /* background-color: sienna; */
`;
const Holder = styled.div`
  width: 90%;
  height: 400px;
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
  margin-bottom: 50px;
  /* background-color: green; */
`;
