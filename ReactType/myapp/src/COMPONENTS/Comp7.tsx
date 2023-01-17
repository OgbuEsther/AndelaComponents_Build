import React from "react";
import styled from "styled-components";
import WelcomeCard from "./WelcomeCard";

const Comp7 = () => {
  return (
    <div>
      <Container>
        <Txt>
          {" "}
          <h1>
            Welcome to the future of <br /> meaningful, sustainable work
          </h1>
          <p>
            We believe that the sum is greater than our parts – our impact can
            be seen globally. We specialize in helping our highly-skilled,
            global technology talent community in emerging markets, connect with
            hundreds of leading companies
          </p>
        </Txt>
        <Content>
          <Wrapper>
            <Holder>
              <WelcomeCard
                title="110+"
                sub="
Countries represented on
6 continents"
              />

              <WelcomeCard title="96%" sub="Successful placements" />
              <WelcomeCard title="84%" sub="Increased income for Andelans" />
            </Holder>
          </Wrapper>
          <Wrapper1>
            <Holder1>
              <WelcomeCard title="175,000+" sub="Technologists represented" />
              <WelcomeCard
                title="18+"
                sub="Months
Average engagement"
              />
            </Holder1>
          </Wrapper1>
        </Content>
        <Lef>
          <Button2 cl="white" wd="250px" br="1px solid black" bc="">
            <Text>Apply for Remote Jobs</Text>
          </Button2>
          <Button2 cl="" wd="180px" br="" bc="#56C870">
            <Text1>Hire Talents</Text1>
          </Button2>
        </Lef>
      </Container>
    </div>
  );
};

export default Comp7;

const Lef = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 40px;
  margin-top: 50px;
`;

const Text = styled.div`
  font-size: 19px;
  color: black;
`;
const Text1 = styled.div`
  font-size: 20px;
`;

const Button2 = styled.div<{ wd: string; br: string; bc: string; cl: string }>`
  width: ${(props) => props.wd};
  height: 70px;
  border-radius: 50px;
  border: ${(props) => props.br};
  background-color: ${(props) => props.bc};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  cursor: pointer;
  color: ${(props) => props.cl};

  :hover {
    transform: scale(0.93);
    transition: all ease-in-out 400ms;
  }
`;

const Content = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 300px;
`;
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Txt = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;

  width: 90%;
  height: 200px;

  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  width: 100%;

  /* background-color: blue; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  height: 100%;
`;
const Holder1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;
