import { useState } from "react";
import CircleGallery from "../../components/circle-gallery/CircleGallery";
import "./landing-page.css";
export default function LandingPage() {
  const [button, setButton] = useState(false);
  console.log(button);
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Delicious</h1>
        <h2 className="sub-title">Quench the Hunger</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          ipsum, auctor quis sagittis felis risus, a odio. Amet ante nulla sem
          mauris. Sollicitudin ultrices enim quam.
        </p>
        <button className={` ${button ? "animate-fade" : ""}`}>
          Quench Now
        </button>
      </div>
      <CircleGallery setButton={setButton} />
    </div>
  );
}
