import React from "react";
import Image from "next/image";
import ShareButton from "../ShareButton";
import berries from "@/images/berrysymbol.png";
import bg from "@/images/vintage-paper.png";
import html2canvas from "html2canvas";
import styles from "./wantedposter.module.css";

const WantedPoster = ({ name, image, bounty, handleRegenerate }) => {
  const containerStyle = {
    backgroundImage: `url(${bg.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const imageStyle = {
    backgroundImage: `url(${image})`,
    border: "3px solid black",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  const handleDownload = () => {
    const container = document.querySelector(".poster__container");

    html2canvas(container).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "wanted-poster.png";
      link.click();
    });
  };
  return (
    <div className={styles.container}>
      <div
        className={`${styles.poster__container} poster__container`}
        style={containerStyle}
      >
        <h1 className={styles.wanted}>Wanted</h1>

        <div style={imageStyle} className={styles.wanted__img}></div>
        {/* <img src={image} className={styles.wanted__img} /> */}

        <h3 className={styles.dead__or__alive}>DEAD OR ALIVE</h3>

        <h2 className={styles.pirate__name}>{name}</h2>

        <p className={styles.bounty}>
          -<img src={berries.src} className={styles.berries} />
          {bounty}-
        </p>
        <div className={styles.footer}>
          <h4>
            {`Wanted for notorious deeds and crimes against humanity. Bring proof of your encounter to the nearest Marine Base to claim the substantial reward – a bounty of ${bounty} berries awaits the one who can apprehend this legendary rogue.`}
          </h4>
          <h2 className={styles.marine}>MARINE</h2>
        </div>
      </div>
      <div className={styles.btn__container}>
        <ShareButton />
        <button
          onClick={handleDownload}
          className={`${styles.download} ${styles.buttons}`}
        >
          Download
        </button>
        <button
          className={`${styles.download} ${styles.buttons}`}
          onClick={handleRegenerate}
        >
          Regenerate
        </button>
      </div>
    </div>
  );
};

export default WantedPoster;
