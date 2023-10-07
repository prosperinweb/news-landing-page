import styles from "./Navbar.module.css";

const LINK_ITEMS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "New",
    url: "/new",
  },
  {
    label: "Popular",
    url: "/popular",
  },
  {
    label: "Trending",
    url: "/trending",
  },
  {
    label: "Categories",
    url: "/categories",
  },
];

const Navbar = () => (
  <nav className={styles.nav} aria-label="Main navigation">
    {LINK_ITEMS.map((linkItem) => (
      <a className={styles.link} href={linkItem.url} key={linkItem.url}>
        {linkItem.label}
      </a>
    ))}
  </nav>
);

export default Navbar;
