import { Features, Hero, Sidebar } from "../../views";
import styles from "./Main.module.scss";

const FEATURE_ITEMS = [
  {
    id: "eidckj12r4",
    imageUri: "https://source.unsplash.com/featured/?laptop",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    path: "/reviving-retro-pcs",
  },
  {
    id: "eicj12r4",
    imageUri: "https://source.unsplash.com/featured/?gaming",
    title: " Top 10 Laptops of 2023",
    description: "A sneak peek at the laptops of the future.",
    path: "/top-10-laptops-of-2023",
  },
  {
    id: "eickj12r4",
    imageUri: "https://source.unsplash.com/featured/?gaming",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    path: "/the-growth-of-gaming",
  },
];

const Main = () => (
  <main className={styles.main}>
    <Hero
      articleId="eickj12r4"
      imageUri="https://source.unsplash.com/featured/?web3"
      title="The Bright Future of Web 3.0?"
      description="
        We dive into the next eveolution of the web that claims to put the power of the 
        platforms back into the hands of the people. But is it really fulfilling its 
        promise?
        "
      heroAction={(id: string) => console.log(id)}
    />
    <Sidebar />
    <Features featureItems={FEATURE_ITEMS} />
  </main>
);

export default Main;
