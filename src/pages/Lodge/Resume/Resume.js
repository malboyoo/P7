import styles from "./Resume.module.scss";
import starIcon from "../../../assets/images/star.svg";

function Resume({ title, host, rating, location, tags }) {
  let starArray = [];
  const starToBolean = (rating) => {
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        starArray.push(true);
      } else {
        starArray.push(false);
      }
    }
  };
  starToBolean(rating);

  return (
    <div className={`${styles.resumeContainer} flex-row`}>
      <div className={`${styles.nameTagContainer} flex-col`}>
        <h1>{title}</h1>
        <p className={styles.location}>{location}</p>
        <div className="flex-row wrap">
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={`${styles.authorRatingContainer} flex-col`}>
        <div className={`${styles.namePictureContainer} flex-row`}>
          <h3>
            {host.name.split(" ")[0]} <br />
            {host.name.split(" ")[1]}
          </h3>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className={`${styles.starContainer} flex-row`}>
          {starArray.map((star) =>
            star ? (
              <img src={starIcon} alt="etoile" className="star primary" fill="#FF6060" key={crypto.randomUUID()}></img>
            ) : (
              <img src={starIcon} alt="etoile" className="star gray" fill="#e3e3e3" key={crypto.randomUUID()}></img>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
