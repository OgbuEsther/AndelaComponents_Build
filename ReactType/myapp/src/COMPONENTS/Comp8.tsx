import React from "react";
import styled from "styled-components";

const Comp8 = () => {
  return (
    <div>
      <Container>
        <Tex>
          <h1>Anytime, anywhere – with Andela, the future of work is here</h1>
          <p>
            Discover how leading companies have built impactful global teams
            with Andela
          </p>
        </Tex>
      </Container>
    </div>
  );
};

export default Comp8;

const Tex = styled.div`
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
  width: 100%;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
`;
