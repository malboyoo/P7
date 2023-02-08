import logo from "../../assets/images/Logo_Kasa.png";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={`${styles.header} flex-row align-items-center`}>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Logo de l'agence Kasa" />
        </NavLink>
      </div>
      <nav className="flex-row">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
