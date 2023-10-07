import styles from "./App.module.css";
import { Footer, Header, Main } from "../containers";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
