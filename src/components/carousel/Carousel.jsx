import React from "react";
import "./carousel.css";

function Carousel({ viewTriggerer, imgArray, name }) {
  function back() {
    viewTriggerer(false);
  }

  const imgCards = imgArray.map((imgs) => {
    return <img alt="images" className="card" src={imgs.img} />;
  });

  return (
    <>
      <div className="closer" onClick={back}>
        <span className="material-symbols-rounded">arrow_back</span>
      </div>

      <div className="headingInViewCard">
        <h1>{name}</h1>
      </div>

      <div className="carouselContainer">
        <div className="carousel">
        {imgCards}
        </div>
      </div>
    </>
  );
}

export default Carousel;
