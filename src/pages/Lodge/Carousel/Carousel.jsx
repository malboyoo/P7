import styles from "./Carousel.module.scss";
import React, { useState } from "react";

function Carousel({ pictures, altName }) {
  const [pictureIndex, setPictureIndex] = useState(0);

  const handleClickNext = () => {
    if (pictures.length > pictureIndex + 1) {
      setPictureIndex(pictureIndex + 1);
    } else {
      setPictureIndex(0);
    }
  };

  const handleClickPrevious = () => {
    if (pictureIndex !== 0) {
      setPictureIndex(pictureIndex - 1);
    } else {
      setPictureIndex(pictures.length - 1);
    }
  };

  return (
    <div className={styles.carousel}>
      <img src={pictures[pictureIndex]} alt={`${altName} ${pictureIndex + 1}`} />

      {pictures.length !== 1 && (
        <button className={`${styles.btnNext} ${styles.btn}`} onClick={handleClickNext}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      )}
      {pictures.length !== 1 && (
        <button className={`${styles.btnPrev} ${styles.btn}`} onClick={handleClickPrevious}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      )}
      <span className={styles.currentImg}>{`${pictureIndex + 1}/${pictures.length}`}</span>
    </div>
  );
}

export default Carousel;
