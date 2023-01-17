import React from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Comp6 from "./Comp6";
import Comp7 from "./Comp7";
import Comp8 from "./Comp8";

import { GlobalStyle } from "./GlobalStyle";
import Hero from "./Hero";

const HomeScreen = () => {
  return (
    <div>
      <GlobalStyle />
      <Hero />
      <Comp1 />
      <Comp2 />
      <br />
      <Comp3 />
      <br />
      <br />
      <br />
      <br />
      <Comp4 />
      <br />
      <br />
      <br />
      <br />
      <Comp5 />

      <Comp6 />
      <Comp7 />
      <br />
      <br />
      <br />
      <br />
      <Comp8 />
    </div>
  );
};

export default HomeScreen;
