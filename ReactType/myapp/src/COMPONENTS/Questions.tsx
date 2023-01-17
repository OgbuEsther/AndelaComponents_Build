import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const Questions = () => {
  const [show, setShow] = useState<Boolean>(false);
  const [show1, setShow1] = useState<Boolean>(false);
  const [show2, setShow2] = useState<Boolean>(false);
  const [show3, setShow3] = useState<Boolean>(false);
  const [show4, setShow4] = useState<Boolean>(false);

  const [icon, setIcon] = useState<Boolean>(false);
  const [icon1, setIcon1] = useState<Boolean>(false);

  const IconShow = () => {
    setIcon(!icon);
  };

  const IconShow1 = () => {
    setIcon1(!icon1);
  };

  const Toggle = () => {
    setShow(!show);
  };
  const Toggle1 = () => {
    setShow1(!show1);
  };
  const Toggle2 = () => {
    setShow2(!show2);
  };
  const Toggle3 = () => {
    setShow3(!show3);
  };
  const Toggle4 = () => {
    setShow4(!show4);
  };

  return (
    <Container>
      <Hold>
        <Top>Frequently asked questions</Top>
        <Nav onClick={Toggle} onClickCapture={IconShow}>
          <Icon>
            {!icon ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
          </Icon>{" "}
          Is coding good for kids?
        </Nav>
        {!show ? null : (
          <Message>
            We're living during a high-tech revolution, witnessing life-changing{" "}
            <br />
            advancements in medicine, environmental conservation, and much more.
            At <br />
            the core of all these amazing projects and discoveries is CODE. Code
            can be <br />
            the thing that differentiates your child from peers and allows them
            to stand <br />
            out as an asset for companies when they are looking for employment.
            The <br />
            children who learn to code today will become the creators of the
            technology <br />
            tomorrow. Learning how to code can help children make a major <br />
            contribution to the world that they live in and make a lasting
            impact.
          </Message>
        )}
        {!show ? null : (
          <Message2>
            As kids and teens learn to code, they also build essential skills
            like critical <br />
            thinking, logic, and problem-solving. They learn to logically
            sequence events, <br />
            create playable games, tell good stories, and model real situations.
            They also <br />
            learn computational thinking by developing algorithmic and design
            thinking <br />
            abilities. Learning to code has become an essential element of a
            child's <br />
            education and an excellent way to express their creativity and
            imagination.
          </Message2>
        )}
        <Nav onClick={Toggle1} onClickCapture={IconShow1}>
          <Icon>
            {" "}
            {!icon1 ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
            {/* <MdKeyboardArrowRight />{" "} */}
          </Icon>{" "}
          How do I start my child coding?
        </Nav>

        {!show1 ? null : (
          <Message2>
            {" "}
            education and an excellent way to express their creativity and
            imagination.
          </Message2>
        )}
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          What age is best to introduce coding to kids?
        </Nav>
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          Which is the best coding for kids program?
        </Nav>
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          Why is coding needed?
        </Nav>
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          Why should we use Tynker coding for kids?
        </Nav>
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          How do I teach my 7 year old code?
        </Nav>
        <Nav>
          <Icon>
            <MdKeyboardArrowRight />
          </Icon>{" "}
          What options are there for coding for teens?
        </Nav>
      </Hold>
    </Container>
  );
};

export default Questions;
const Message2 = styled.div`
  margin-top: 20px;
  margin-left: 14px;
`;
const Message = styled.div`
  margin-left: 14px;
`;
const Icon = styled.div`
  font-size: 44px;
  margin-top: 10px;
`;
const Hold = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Nav = styled.h2`
  color: #7e8285;
  font-weight: bold;
  align-items: center;
  display: flex;
  margin: 0;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #5dbe5b;
  }
`;
const Top = styled.h1`
  color: #25293a;
  margin: 0;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 45px;
  align-items: center;
  padding-bottom: 40px;
  background-color: aliceblue;
`;
