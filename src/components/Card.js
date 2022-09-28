import React from "react";
import img3 from "../star.png";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="cardSection">
      {badgeText && <div className="openSpots">{badgeText}</div>}
      <img src={`../Images/${props.coverImg}`} alt="img2" className="img2" />
      <div className="rating">
        <img src={img3} alt="img3" className="img3" />
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <p className="cost">
        <strong>From ${props.price}</strong> / person
      </p>
    </section>
  );
}
