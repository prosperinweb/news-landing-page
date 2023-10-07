import { ContactForm, ResourceLinks, SocialLinks } from "../../views";
import styles from "./Footer.module.scss";

const { footer, footer__copyright } = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <ResourceLinks />
      <SocialLinks />
      <ContactForm />
      <div className={footer__copyright}>
        &copy; {new Date().getFullYear()} WorldNews. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
