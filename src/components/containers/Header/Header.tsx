import styles from "./Header.module.scss";
import Logo from "../../../assets/images/logo.svg?react";
import { Navbar } from "../../views";

const Header: React.FC = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    <Navbar />
  </header>
);

export default Header;
