import { useRef, useState } from "react";
import styles from "./CollapseMenu.module.scss";

function CollapseMenu({ name, text, fromLodge = false }) {
  const [active, setActive] = useState(false);
  const contentRef = useRef();

  return (
    <div
      className={`${styles.collapseBox} flex-fill`}
      style={fromLodge ? { maxWidth: 580 + "px", fontSize: 18 + "px" } : null}
    >
      <div
        className={`${styles.nameContainer} flex-row align-items-center`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <h2 style={fromLodge ? { fontSize: "18px" } : null}>{name}</h2>
        {active ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-up"></i>}
      </div>
      <div
        className={`${styles.textBox}`}
        ref={contentRef}
        style={active ? { maxHeight: contentRef.current.scrollHeight + "px" } : { maxHeight: "0px" }}
      >
        <div className={styles.pContainer}>
          {Array.isArray(text) ? (
            text.map((el) => (
              <p style={{ fontSize: "18px" }} key={crypto.randomUUID()}>
                {el}
              </p>
            ))
          ) : (
            <p style={{ fontSize: "18px" }}>{text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollapseMenu;
