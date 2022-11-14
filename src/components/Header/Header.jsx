import logo from "../../assets/images/Logo_Kasa.png";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`${styles.header} flex-row align-items-center`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo de l'agence Kasa" />
        </Link>
      </div>
      <nav className={`${styles.nav} flex-row`}>
        <Link to="/" className={styles.link} style={pathname === "/" ? { textDecoration: "underline" } : null}>
          Accueil
        </Link>
        <Link to="about" className={styles.link} style={pathname === "/about" ? { textDecoration: "underline" } : null}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
