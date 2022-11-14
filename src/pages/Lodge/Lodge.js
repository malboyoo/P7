import { useParams, Navigate } from "react-router-dom";
import CollapseMenu from "../../components/CollapseMenu/CollapseMenu";
import data from "../../datas/logements";
import Carousel from "./Carousel/Carousel";
import Resume from "./Resume/Resume";
import styles from "./Lodge.module.scss";

function Lodge() {
  const { id } = useParams();
  const lodgeData = data.find((el) => el.id === id);

  return lodgeData === undefined ? (
    <Navigate to="/error" replace={true} />
  ) : (
    <div className="flex-col">
      <Carousel pictures={lodgeData.pictures} />
      <Resume {...lodgeData} />
      <div className={`${styles.collapsesContainer}`}>
        <div className={`${styles.collapseWrapper} flex-fill`}>
          <CollapseMenu
            className={styles.collapseLodge}
            name="Description"
            text={lodgeData.description}
            fromLodge={true}
            key={crypto.randomUUID()}
          />
        </div>
        <div className={`${styles.collapseWrapper} flex-fill`}>
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
