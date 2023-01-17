import React from "react";
import styled from "styled-components";

import { IoIosContact } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

interface Iprops {
  bg: string;
  name: string;
}
const SliderCard: React.FC<Iprops> = ({ bg, name }) => {
  return (
    <Container>
      <Card bg={bg}>
        <ProfileContainer>
          <Profile>
            <IoMdContact />
          </Profile>
          <Name>{name}</Name>
        </ProfileContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione in
          quos repellat praesentium laboriosam nobis rerum exercitationem
          magnam.
        </p>
      </Card>
    </Container>
  );
};

export default SliderCard;

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
const Profile = styled.div`
  height: 40px;
  width: 40px;
  /* background-color: silver; */
  border-radius: 50%;
  object-fit: cover;
  font-size: 50px;
`;
const Name = styled.div`
  margin-left: 20px;
`;
const Container = styled.div``;
