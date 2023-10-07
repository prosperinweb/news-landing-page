import styles from "./Hero.module.css";

interface HeroProps {
  articleId: string;
  imageUri: string;
  title: string;
  description: string;
  heroAction: (id: string) => void;
}

const Hero = ({
  articleId,
  imageUri,
  title,
  description,
  heroAction,
}: HeroProps) => {
  const {
    hero,
    heroImage,
    heroTitle,
    heroContent,
    heroDescription,
    heroDescriptionContent,
    heroBtn,
  } = styles;
  return (
    <div className={hero}>
      <img className={heroImage} src={imageUri} alt={heroTitle} />
      <div className={heroContent}>
        <h2 className={heroTitle}>{title}</h2>
        <div className={heroDescriptionContent}>
          <p className={heroDescription}>{description}</p>
          <button className={heroBtn} onClick={() => heroAction(articleId)}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
