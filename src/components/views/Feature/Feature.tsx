import styles from "./Feature.module.scss";

const Feature = ({
  index,
  imageUri,
  title,
  description,
  path,
}: FeatureItem) => {
  const idCount = index! + 1;
  return (
    <a href={path} className={styles.feature}>
      <img className={styles.feature__image} src={imageUri} alt={title} />
      <div className={styles.feature__body}>
        <h3 className={styles.feature__count}>
          {idCount < 10
            ? idCount.toString().padStart(2, "0")
            : idCount.toString()}
        </h3>
        <div className={styles.feature__details}>
          <h4 className={styles.feature__heading}>{title}</h4>
          <p className={styles.feature__description}>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Feature;
