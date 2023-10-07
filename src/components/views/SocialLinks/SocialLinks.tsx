import styles from "./SocialLinks.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinks = () => (
  <div className={styles.socialLinks}>
    <h3 className={styles.socialLinks__title}>Social</h3>
    <nav className={styles.socialLinks__nav}>
      <a title="facebook" id="facebook" href="#facebook" className={styles.socialLinks__nav__link}>
        <FaFacebook className={styles.socialLinks__nav__link__icon} />
      </a>
      <a title="twitter" id="twitter" href="#twitter" className={styles.socialLinks__nav__link}>
        <FaTwitter />
      </a>
      <a title="instagram" id="instagram" href="#instagram" className={styles.socialLinks__nav__link}>
        <FaInstagram />
      </a>
      <a title="youtube" id="youtube" href="#youtube" className={styles.socialLinks__nav__link}>
        <FaYoutube />
      </a>
    </nav>
  </div>
);

export default SocialLinks;
