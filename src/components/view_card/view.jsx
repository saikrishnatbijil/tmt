import React, { useState } from "react";
import "./view.css";
import { CarouselCard, SpecCard } from "..";

function View({ name, subServices }) {
  const [isImageView, setIsImageView] = useState(false);

  const [currentImgs, setCurrentImgs] = useState([]);
  const [currentName, setCurrentName] = useState("");

  function hide() {
    const modal = document.querySelector("[data-model]");
    if (modal) {
      modal.close();
    }
  }
  function triggerer(title, subServices, images) {
    setCurrentImgs(images);
    setCurrentName(title);
    setIsImageView(true);
  }
  return (
    <>
      <dialog data-model className="viewCardContainer">
        {isImageView ? (
          <CarouselCard viewTriggerer={setIsImageView} name={currentName} imgArray={currentImgs}/>
        ) : (
          <>
            <div className="closer" onClick={hide}>
              <span className="material-symbols-rounded">close</span>
            </div>
            <div className="headingInViewCard">
              <h1>{name}</h1>
            </div>
            <div className="cardsContainer">
              <SpecCard details={subServices} triggerer={triggerer} />
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

export default View;
