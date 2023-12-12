import Sidebar from "../Sidebar";
import  styles from "./styles.module.scss";

import github from "../../images/github.png";
import replit from "../../images/replit.png";
import linkedin from "../../images/linkedin.png";


const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Sidebar/>
      <div className={styles.wrapper}>
        <span>
          <a href="index.html">Magno Dev</a>
        </span>
        <div className={styles.social}>
          <a href="https://github.com/PedroMagno11" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://replit.com/@PedroMagno2" target="_blank">
            <img src={replit} alt="Replit" />
          </a>
          <a href="https://www.linkedin.com/in/pedro-magno-017a64253/" target="_blank">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
