import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/lodge/${id}`}>
      <article className={`${styles.card} m-25`}>
        <div className={styles.imgGradiant}>
          <h2>{title}</h2>
          <img src={cover} alt="Representation du logement" />
        </div>
      </article>
    </Link>
  );
}

export default Card;
