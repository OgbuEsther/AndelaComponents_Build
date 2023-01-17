import React from "react";
import styled from "styled-components";
import pic1 from "./ASSESTS/github_logo.svg";
import pic2 from "./ASSESTS/invision_logo.svg";
import pic3 from "./ASSESTS/coursera_logo.svg";
import pic4 from "./ASSESTS/Kraft_Heinz_Logo.svg";
import pic5 from "./ASSESTS/seismic_logo.svg";
import pic6 from "./ASSESTS/goldman_sachs_logo.svg";

const Comp2 = () => {
  return (
    <div>
      <Container>
        <Holder>
          <TopText>Trusted by</TopText>
          <Wrapper>
            <Image src={pic1} />
            <Image src={pic2} />
            <Image src={pic3} />
            <Image src={pic4} />
            <Image src={pic5} />
            <Image src={pic6} />
          </Wrapper>
        </Holder>
      </Container>
    </div>
  );
};

export default Comp2;

const Holder = styled.div`
  /* background-color: rebeccapurple; */
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  align-items: center;
`;

const TopText = styled.div`
    font-family: 'Inria Serif','Garamond',serif;
  font-size: 33px;
  font-weight: 400;
  margin-bottom : 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 10px;
`;
const Image = styled.img`
  width: 120px;
`;
