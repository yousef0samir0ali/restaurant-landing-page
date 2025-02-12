import "./navbar.css";
import ellipse from "../../assets/icons/ellipse.svg";
import lock from "../../assets/icons/lock.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ellipse} alt="Ellipse Icon" />
        <span>Food Hunt</span>
      </div>
      <ul>
        <li>Breakfast</li>
        <li>Launch</li>
        <li>Dinner</li>
      </ul>
      <div className="lock">
        <img src={lock} alt="Lock Icon" />
      </div>
    </nav>
  );
}
