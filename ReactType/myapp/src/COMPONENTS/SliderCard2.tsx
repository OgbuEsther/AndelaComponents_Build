import React from "react";
import styled from "styled-components";
interface Iprops {
  bg: string;
  img: string;
}
const SliderCard2: React.FC<Iprops> = ({ bg, img }) => {
  return (
    <Container>
      <Card bg={bg}>
        <ProfileContainer>
          <Profile src={img} />
          {/* <Name>Name</Name> */}
        </ProfileContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in
          quos repellat praesentium laboriosam nobis rerum exercitationem magnam
          aspernatur odit minima voluptatibus neque molestias provident,
          quisquam nostrum, harum, officiis recusandae.
        </p>
      </Card>
    </Container>
  );
};

export default SliderCard2;

const Card = styled.div<{ bg: string }>`
  height: 240px;
  width: 220px;
  background: ${(props) => props.bg};
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 10px;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  border-radius: 5px;

  p {
    font-weight: 100;
    font-size: 15px;
    color: #3a3939;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.img`
  height: 50px;
  width: 100px;
  /* background-color: silver; */
  border-radius: 5px;
`;
const Name = styled.div`
  margin-left: 20px;
`;
const Container = styled.div``;
