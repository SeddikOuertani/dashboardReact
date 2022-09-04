import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderStats from "../../components/headerstats";
import About from "../../pages/about";
import Courses from "../../pages/courses";
import Overview from "../../pages/overview";
import Settings from "../../pages/settings";
import Navbar from "../navbar";
import "./style.css";

const Main = (props) => {
  return (
    <div className="main-wrapper">
      <div className="header">
        <Navbar />
        <HeaderStats/>
      </div>
      <div className="content">
        <Routes>
          <Route path="/courses" element={<Courses />} />

          <Route path="/overview" element={<Overview />} />

          <Route path="/about" element={<About />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
