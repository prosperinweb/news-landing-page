import styles from "./Features.module.scss";
import { Feature } from "../../views";

interface FeaturesProps {
  featureItems: FeatureItem[];
}

const Features = ({ featureItems }: FeaturesProps) => (
  <div className={styles.features}>
    <h1 className={styles.features__title}>Features</h1>
    <ul className={styles.features__list}>
      {featureItems.map(({ id, imageUri, title, description, path }, index) => (
        <Feature
          key={id}
          id={id}
          idx={index}
          imageUri={imageUri}
          title={title}
          description={description}
          path={path}
        />
      ))}
    </ul>
  </div>
);

export default Features;
