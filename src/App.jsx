import Tabs from "./Tabs";
import { tabsData } from "./data";
import "./App.css";
import { LiaPawSolid } from "react-icons/lia";
import animals from "./animals.avif";
import animalsOne from "./animal1.jpg";
import animalsTwo from "./animal2.jpg";
import animalsThree from "./animal3.jpg";
import animalsFour from "./animal4.jpg";


export default function App() {
  return (
    <div className="container">

      <nav className="app">

        <div className="logo">
          <h1><LiaPawSolid color="#efd5d8" />PetAnimals<LiaPawSolid color="#efd5d8" /></h1>
          <p className="par">Ветеринарна клініка</p>
        </div>

          <p className="tell">+38 026 123-45-67</p>
          <p className="tell">вул.Румунська, 253,<br /> м.Чернівці</p>
          <p className="tell">Працюємо 24/7</p>
          <button className="tell btn">Записатися</button>  
      </nav>

      <div>
        <Tabs tabs={tabsData} />
      </div>

      <div className="photo">
        <img src={animals} alt="Animal" className="cont-picture"/>
        <img src={animalsOne} alt="AnimalOne" className="cont-picture"/>
        <img src={animalsTwo} alt="AnimalTwo" className="cont-picture"/>
        <img src={animalsThree} alt="AnimalThree" className="cont-picture"/>
        <img src={animalsFour} alt="AnimalFour" className="cont-picture"/>
      </div>

      <div className="footer"><p><LiaPawSolid color="#efd5d8" />PetAnimals<LiaPawSolid color="#efd5d8" /> © 2010-2026</p></div>
    </div>
  );
}
