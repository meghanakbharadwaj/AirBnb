import React from "react";
import img1 from "../photo-grid.png";

export default function Hero() {
  return (
    <section className="heroSection">
      <img src={img1} alt="img2" className="img1" />
      <h1 className="mainHeading">Online Experiences</h1>
      <p className="paragraph1">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home
      </p>
    </section>
  );
}
