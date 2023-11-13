import React from "react";
import html2canvas from "html2canvas";
import styles from "../components/wantedPoster/wantedposter.module.css";

const ShareButton = () => {
  const handleClick = async () => {
    try {
      const canvas = await html2canvas(
        document.querySelector(".poster__container")
      );
      const imageUrl = canvas.toDataURL("image/png");

      if (navigator.share) {
        await navigator.share({
          files: [
            new File(
              [await (await fetch(imageUrl)).blob()],
              "wanted-poster.png",
              {
                type: "image/png",
              }
            ),
          ],
        });
        alert("Shared successfully!");
      } else if (navigator.clipboard) {
        const data = new DataTransfer();
        data.items.add(
          await (await fetch(imageUrl)).blob(),
          "wanted-poster.png"
        );

        await navigator.clipboard.write(data);
        alert("Copied to clipboard!");
      } else {
        alert("Sharing not supported in this browser.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      className={`${styles.share__btn} ${styles.buttons}`}
      onClick={handleClick}
    >
      Share
    </button>
  );
};

export default ShareButton;
