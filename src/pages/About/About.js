import Background from "./Background/Background";
import CollapseMenu from "../../components/CollapseMenu/CollapseMenu";
import aboutData from "../../datas/about";
import styles from "./About.module.scss";

function About() {
  return (
    <div className="about">
      <Background />
      <div className={styles.collapseContainer}>
        {aboutData.map((collapseMenu) => (
          <CollapseMenu {...collapseMenu} key={collapseMenu.id} />
        ))}
      </div>
    </div>
  );
}

export default About;
