import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { Navbar } from "../../views";

const Header = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    <Navbar />
  </header>
);

export default Header;
