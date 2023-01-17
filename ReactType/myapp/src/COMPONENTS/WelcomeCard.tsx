import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  sub: string;
}
const WelcomeCard: React.FC<Props> = ({ title, sub }) => {
  return (
    <div>
      <Container>
        <h1>{title}</h1>
        <p>{sub}</p>
      </Container>
    </div>
  );
};

export default WelcomeCard;

const Container = styled.div`
  width: 350px;
  height: 250px;
  background-color: #b0d6ce;
  border-radius: 10px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
