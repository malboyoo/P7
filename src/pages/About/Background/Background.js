import background from "../../../assets/images/About_background_desktop.png";
import styles from "./Background.module.scss";

function Background() {
  return (
    <div className={`${styles.background}`}>
      <img src={background} alt="Une magnifique forêt dans les montages" />
    </div>
  );
}

export default Background;
