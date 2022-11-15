import styles from "./Housing.module.scss";
import data from "../../../datas/logements";
import Card from "../Card/Card";

function Housing() {
  return (
    <section className={`${styles.housing} flex-row justify-content-center align-items-center p-25`}>
      {data.map((lodge) => (
        <Card {...lodge} key={lodge.id} />
      ))}
    </section>
  );
}

export default Housing;
