import React from "react";
import { GlobalStyle } from "./COMPONENTS/GlobalStyle";
import Header from "./COMPONENTS/Header";
import HomeScreen from "./COMPONENTS/HomeScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ClassWork/Home";
import About from "./ClassWork/About";
import ContactUs from "./ClassWork/ContactUs";
import HeaderOne from "./ClassWork/HeaderOne";
import Footer from "./COMPONENTS/Footer";

// import Questions from "./COMPONENTS/Questions";

const App = () => {
  return (
    <div>
      <HomeScreen />

      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
