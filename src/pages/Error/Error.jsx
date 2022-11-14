import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  return (
    <main className={`${styles.error} flex-col align-items-center justify-content-center flex-fill`}>
      <span>404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={`${styles.link}`} to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error;
