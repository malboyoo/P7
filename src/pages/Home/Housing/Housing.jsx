import styles from "./Housing.module.scss";
import data from "../../../datas/logements";
import { lazy, Suspense } from "react";
const Card = lazy(() => import("../Card/Card"));

function Housing() {
  return (
    <section className={`${styles.housing} flex-row justify-content-center align-items-center p-25`}>
      {data.map((lodge, index) => (
        <Suspense
          key={`suspense-${index}`}
          fallback={
            <div className={`${styles.card} m-25`}>
              <i className="fa-solid fa-spinner animate-spin-slow"></i>
            </div>
          }
        >
          <Card {...lodge} key={lodge.id} />
        </Suspense>
      ))}
    </section>
  );
}

export default Housing;
