import styles from "./Banner.module.scss";
import background from "../../../assets/images/background.jpg";

function Banner() {
  return (
    <div className={`${styles.banner} mt-20 mb-40`}>
      <img src={background} alt="Bannière du titre" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
