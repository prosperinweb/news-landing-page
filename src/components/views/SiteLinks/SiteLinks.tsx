import styles from "./SiteLinks.module.scss";

const { siteLinks, siteLinks__title, siteLinks__nav, siteLinks__nav__link } = styles;

const SiteLinks = () => (
  <div className={siteLinks}>
  <h3 className={siteLinks__title}>Site Links</h3>
  <nav className={siteLinks__nav}>
    <a href="#!" className={siteLinks__nav__link}>
      Terms & Conditions
    </a>
    <a href="#!" className={siteLinks__nav__link}>
      Privacy Policy
    </a>
    <a href="#!" className={siteLinks__nav__link}>
      Careers
    </a>
    <a href="#!" className={siteLinks__nav__link}>
      Support
    </a>
    <a href="#!" className={siteLinks__nav__link}>
      FAQs
    </a>
  </nav>
  </div>
);

export default SiteLinks;
