import Background from "./Background/Background";
import CollapseMenu from "../../components/CollapseMenu/CollapseMenu";
import aboutData from "../../datas/about";
import styles from "./About.module.scss";

function About() {
  return (
    <main className="about">
      <Background />
      <section className={styles.collapseContainer}>
        {aboutData.map((collapseMenu) => (
          <CollapseMenu {...collapseMenu} key={collapseMenu.id} />
        ))}
      </section>
    </main>
  );
}

export default About;
