import "./circle-gallery.css";
import centralImage1 from "/src/assets/images/centralImage1.png";
import centralImage2 from "/src/assets/images/centralImage2.png";
import image1 from "/src/assets/images/image1.png";
import image2 from "/src/assets/images/image2.png";
import image3 from "/src/assets/images/image3.png";
import image4 from "/src/assets/images/image4.png";
import image5 from "/src/assets/images/image5.png";
import arrow from "/src/assets/icons/arrow.svg";
import { useState } from "react";
import Arrow from "../../components/arrow/Arrow";

export default function CircleGallery({ setButton }) {
  const images = [image1, image2, image3, image4, image5, image4];

  const [rotation, setRotation] = useState(0);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  const [centerImage, setCenterImage] = useState(centralImage1);
  const [animate, setAnimate] = useState(false);

  const rotateLeft = () => {
    if (disableLeft) return;
    setRotation((prev) => prev + 40);
    setDisableLeft(true);
    setDisableRight(false);
    setCenterImage(centralImage2);
    setAnimate(true);
    setButton(true);
    setTimeout(() => {
      setAnimate(false);
      setButton(false);
    }, 500);
    document.documentElement.style.setProperty("--main-color", "#5cac0e");
    document.documentElement.style.setProperty("--primary-color", "#ddffbc");
  };

  const rotateRight = () => {
    if (disableRight) return;
    setRotation((prev) => prev - 40);
    setDisableRight(true);
    setDisableLeft(false);
    setCenterImage(centralImage1);
    setButton(true);
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      setButton(false);
    }, 500);

    document.documentElement.style.setProperty("--main-color", "#fea150");
    document.documentElement.style.setProperty("--primary-color", "#ffbc82");
  };

  return (
    <div className="circle-gallery-wrapper">
      <div className="circle-gallery">
        <div className="central-container">
          <img
            src={centerImage}
            alt="centralImage1"
            className={`central-image ${animate ? "animate-fade" : ""}`}
          />
        </div>
        <div className="circle-border"></div>
        <div
          className={`circle-container ${
            rotation !== 0 ? "rotated hidden" : ""
          }`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="circle-image-wrapper">
              <img
                src={img}
                alt={`image ${index + 1}`}
                className="circle-image"
              />
            </div>
          ))}
        </div>
        <Arrow
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
          disableLeft={disableLeft}
          disableRight={disableRight}
          arrow={arrow}
        />
      </div>
    </div>
  );
}
