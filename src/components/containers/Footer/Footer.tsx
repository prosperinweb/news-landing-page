import React from "react";
import { ContactForm, ResourceLinks, SocialLinks } from "../../views";
import styles from "./Footer.module.scss";

/**
 * Renders a footer section in a TypeScript-React application.
 * The footer includes a set of components such as `ResourceLinks`, `SocialLinks`, `ContactForm`, and `CopyRight`.
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ResourceLinks />
      <SocialLinks />
      <ContactForm />
      <CopyRight />
    </footer>
  );
};

const CopyRight = () => (
  <div className={styles.copyright}>
    &copy; {new Date().getFullYear()} WorldNews. All rights reserved.
  </div>
);

export default Footer;
