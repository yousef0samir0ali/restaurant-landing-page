import "./arrow.css";

export default function Arrow({ rotateLeft, rotateRight, disableLeft, disableRight, arrow }) {
  return (
    <>
      <div onClick={rotateLeft} className={`arrow left-arrow ${disableLeft ? "disabled" : ""}`}>
        <img src={arrow} alt="arrow" />
      </div>
      <div onClick={rotateRight} className={`arrow right-arrow ${disableRight ? "disabled" : ""} `}>
        <img src={arrow} alt="arrow" />
      </div>
      ;
    </>
  );
}
