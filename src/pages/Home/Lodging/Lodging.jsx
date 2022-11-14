import { Link } from "react-router-dom";
import styles from "./Lodging.module.scss";

function Lodging({ id, title, cover }) {
  return (
    <Link to={`/lodging/${id}`}>
      <article className={`${styles.lodging} m-25`}>
        <div className={styles.imgGradiant}>
          <h2>{title}</h2>
          <img src={cover} alt="Representation du logement" />
        </div>
      </article>
    </Link>
  );
}

export default Lodging;