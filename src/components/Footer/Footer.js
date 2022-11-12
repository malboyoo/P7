import styles from "./Footer.module.scss";
import logoWhite from "../../assets/images/Logo_Kasa_white.png";

function Footer() {
  return (
    <footer className={`${styles.footer} flex-col align-items-center justify-content-center`}>
      <img src={logoWhite} alt="Logo de l'agence Kasa" />
      <p className="mb-30">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
