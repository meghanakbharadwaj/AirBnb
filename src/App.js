import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./Data";

export default function App() {
  const Info = cardData.map((data) => {
    return (
      <Card
        key={data.id} //this is used to give a unique key for every card
        {...data}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cardsList">{Info}</section>
    </div>
  );
}
