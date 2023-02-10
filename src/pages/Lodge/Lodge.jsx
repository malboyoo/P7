import { useParams, Navigate } from "react-router-dom";
import CollapseMenu from "../../components/CollapseMenu/CollapseMenu";
import data from "../../datas/logements";
import Resume from "./Resume/Resume";
import styles from "./Lodge.module.scss";
import { lazy, Suspense } from "react";
const Carousel = lazy(() => import("./Carousel/Carousel"));

function Lodge() {
  const { id } = useParams();
  const lodgeData = data.find((el) => el.id === id);

  return lodgeData === undefined ? (
    <Navigate to="/error" replace={true} />
  ) : (
    <main className="flex-col">
      <Suspense
        fallback={
          <div className={`${styles.carousel}`}>
            <i className="fa-solid fa-spinner animate-spin-slow"></i>
          </div>
        }
      >
        <Carousel pictures={lodgeData.pictures} altName={lodgeData.title} />
      </Suspense>

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
    </main>
  );
}

export default Lodge;
