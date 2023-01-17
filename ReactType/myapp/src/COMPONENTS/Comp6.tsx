import React from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard2 from "./SliderCard2";
import { IoIosContact } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import pic from "./ASSESTS/github_logo.svg";
import pic2 from "./ASSESTS/AndelaLogo.svg";
import pic3 from "./ASSESTS/coursera_logo.svg";
import pic4 from "./ASSESTS/seismic_logo.svg";
import pic5 from "./ASSESTS/Kraft_Heinz_Logo.svg";

const Comp6 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4.6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Container>
      <h1>
        Brilliant minds and companies
        <br /> come together to build the future
      </h1>

      <Wrapper>
        <Slider {...settings}>
          <SliderCard bg="#E0F1EB" name="Matt" />
          <SliderCard bg="#FCE1E1" name="Raphael" />
          <SliderCard2 bg="#B0D6CE" img={pic} />
          <SliderCard bg="silver" name="Tony" />
          <SliderCard bg="#FDF0DC" name="Makan" />
          <SliderCard2 bg="#D5C0C1" img={pic4} />
          <SliderCard2 bg="pink" img={pic} />
          <SliderCard bg="#E0F1EB" name="Alexa" />
          <SliderCard bg="#E0F1EB" name="Adetola" />
          <SliderCard2 bg="lilac" img={pic3} />
          <SliderCard bg="#E0F1EB" name="Godwin" />
          <SliderCard2 bg="#B0D6CE" img={pic2} />
          <SliderCard2 bg="#FCE1E1" img={pic5} />
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Comp6;

const Hold = styled.div`
  width: 100%;
  height: 400px;
  background-color: red;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  padding-bottom: 50px;
  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    font-family: "Inria Serif", serif;
  }
`;
const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  /* height: 300px; */
  overflow: hidden;
  /* background-color: black; */
`;
