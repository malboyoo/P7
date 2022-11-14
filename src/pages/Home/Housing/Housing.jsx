import styles from "./Housing.module.scss";
import data from "../../../datas/logements";
import Lodging from "../Lodging/Lodging";

function Housing() {
  return (
    <section className={`${styles.housing} flex-row justify-content-center align-items-center p-25`}>
      {data.map((lodging) => (
        <Lodging {...lodging} key={lodging.id} />
      ))}
    </section>
  );
}

export default Housing;
