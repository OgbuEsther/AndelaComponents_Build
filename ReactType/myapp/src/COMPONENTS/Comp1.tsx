import React from "react";
import styled from "styled-components";

const Comp1 = () => {
  return (
    <div>
      <Container>
        <h1>
          Andela Launches New Platform <br /> to Power the Future of Customized
          Work
        </h1>
        <ButtonHold>
          <Button wd="180px" br="" bc="#56C870">
            <Tex>Hire Talents</Tex>
          </Button>
        </ButtonHold>
      </Container>
    </div>
  );
};

export default Comp1;

const ButtonHold = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tex = styled.div``;

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
  margin-right: 200px;

  :hover {
    transform: scale(0.9);
    transition: all ease-in-out 400ms;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #173b3f;
  display: flex;
  justify-content: space-between;

  h1 {
    color: white;
    margin-left: 20px;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    /* font-family: "Inria Serif", "Garamond", serif; */
  }
`;
