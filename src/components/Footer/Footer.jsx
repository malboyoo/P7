import styles from "./Footer.module.scss";
import logoWhite from "../../assets/images/Logo_Kasa_white.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={`${styles.footer} flex-col align-items-center justify-content-center`}>
      <Link to="/">
        <img src={logoWhite} alt="Logo de l'agence Kasa" />
      </Link>
      <p className="mb-30">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
