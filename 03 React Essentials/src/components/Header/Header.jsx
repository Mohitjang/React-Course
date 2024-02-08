import reactImg from "../../assets/react-core-concepts.png"
const reactDescriptions = ["Fundamental", "Crutial", "Core"];
import "./Header.css"

function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
export default function Header() {
    const getDescription = reactDescriptions[getRandomNumber(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }