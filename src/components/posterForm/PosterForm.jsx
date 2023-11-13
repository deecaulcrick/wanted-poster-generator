"use client";

import React, { useState } from "react";
import Image from "next/image";
import WantedPoster from "../wantedPoster/WantedPoster";
import UploadIcon from "@/images/Upload.svg";
import styles from "./posterform.module.css";

const PosterForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [bounty, setBounty] = useState("");
  const [generatedImage, setGeneratedImage] = useState("");
  const [showForm, setShowForm] = useState(true);

  // Image drag and drop functions
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBountyChange = (e) => {
    setBounty(e.target.value);
  };

  const handleGenerateProfile = () => {
    if (name && image !== "") {
      // const img = document.createElement("img");
      // img.src = canvas.toDataURL("image/png");
      // setGeneratedImage(img);
      setShowForm(false);
    } else {
      alert("Please fill out all the details");
    }
  };

  const handleRegenerate = () => {
    setShowForm(true);
  };
  return (
    <div className={styles.form__container}>
      {showForm ? (
        <form>
          <div className={styles.text__input}>
            <label>Enter your pirate name</label> <br />
            <input
              type="text"
              placeholder="Monkey.D.Luffy "
              maxLength="15"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <label>Upload your pirate photo</label> <br></br>
          <div className={styles.image__upload__container}>
            <div
              className={styles.image__upload}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input" className={styles.upload__label}>
                <figure>
                  <Image src={UploadIcon} />
                </figure>
                <span>Drag & Drop to upload or</span>
                <br />
                <span className={styles.browse__link}>Browse</span>
              </label>
              {image && (
                <div className={styles.uploaded__image}>
                  <img src={image} alt="Uploaded" />
                </div>
              )}
            </div>
          </div>
          <div className={styles.text__input}>
            <label>
              Enter your bounty in berries (Enter comma separated values up to
              12 figures)
            </label>{" "}
            <br />
            <input
              type="text"
              placeholder="115,000,000,000"
              maxLength="15"
              value={bounty}
              onChange={handleBountyChange}
            />
          </div>
          <button
            onClick={handleGenerateProfile}
            className={styles.generate__poster}
          >
            Generate your wanted poster
          </button>
        </form>
      ) : (
        <WantedPoster
          name={name}
          image={image}
          bounty={bounty}
          handleRegenerate={handleRegenerate}
        />
      )}
    </div>
  );
};

export default PosterForm;
