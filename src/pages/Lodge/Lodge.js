import { useParams } from "react-router-dom";
import CollapseMenu from "../../components/CollapseMenu/CollapseMenu";
import data from "../../datas/logements";
import Carousel from "./Carousel/Carousel";
import Resume from "./Resume/Resume";
import styles from "./Lodge.module.scss";

function Lodge() {
  const { id } = useParams();
  const lodgeData = data.find((el) => el.id === id);

  return (
    <div className="flex-col">
      <Carousel pictures={lodgeData.pictures} />
      <Resume {...lodgeData} />
      <div className={`${styles.collapsesContainer} flex-row`}>
        <div>
          <CollapseMenu
            className={styles.collapseLodge}
            name="Description"
            text={lodgeData.description}
            fromLodge={true}
            key={crypto.randomUUID()}
          />
        </div>
        <div>
          <CollapseMenu
            className={styles.collapseLodge}
            name="Équipements"
            text={lodgeData.equipments}
            fromLodge={true}
            key={crypto.randomUUID()}
          />
        </div>
      </div>
    </div>
  );
}

export default Lodge;
