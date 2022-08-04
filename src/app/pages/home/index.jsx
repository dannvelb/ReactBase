import React from "react";
import { Link } from "react-router-dom";
import FooterHome from "./footer";
import HeaderHome from "./header";
const HomeComponent = () => (
  <div className="">
    <HeaderHome></HeaderHome>
    <main className="site-content"></main>
    <FooterHome></FooterHome>
  </div>
);

export default HomeComponent;
