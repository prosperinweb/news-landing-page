import styles from "./Feature.module.scss";

const {
  feature,
  feature__image,
  feature__details,
  feature__details__count,
  feature__details__heading,
  feature__details__description,
} = styles;

const Feature = ({
  index,
  imageUri,
  title,
  description,
  path,
}: FeatureItem) => {
  const idCount = index + 1;
  return (
    <a href={path} className={feature}>
      <img className={feature__image} src={imageUri} alt={title} />
      <div className={feature__details}>
        <h3 className={feature__details__count}>
          {idCount < 10
            ? idCount.toString().padStart(2, "0")
            : idCount.toString()}
        </h3>
        <h4 className={feature__details__heading}>{title}</h4>
        <p className={feature__details__description}>{description}</p>
      </div>
    </a>
  );
};

export default Feature;
