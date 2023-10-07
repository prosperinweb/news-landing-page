import { useState } from "react";
import styles from "./Sidebar.module.scss";

const TAB_CONTENT = {
  New:  [
    {
      title: "Hydrogen VS Electric Cars",
      content: "Will hydrogen cars overtake electric cars in the future?",
    },
    {
      title: "The Downsides of AI Artistry",
      content:
        "AI is revolutionizing art, but the results are mixed. Here's why.",
    },
    {
      title: "Is VC Funding Drying Up?",
      content:
        "The startup funding landscape is changing. Here's what you need to know.",
    },
  ],
  Popular: [
    {
      title: "Is Skynet around the corner?",
      content:
        "AI is getting smarter every day. Should we be worried about the risks?",
    },
    {
      title: "The Future of Quantum Computing",
      content: "Quantum computing is coming. What will it mean for the future?",
    },
    {
      title: "The Future of Space Exploration",
      content:
        "SpaceX is changing the game. What does this mean for the future of space exploration?",
    },
  ],
  Trending: [
    {
      title: "The Future of Work",
      content:
        "The pandemic has changed the way we work. What will the future look like?",
    },
    {
      title: "The Future of Gaming",
      content:
        "The gaming industry is growing rapidly. What will the future look like?",
    },
    {
      title: "The Future of Education",
      content:
        "The pandemic has changed the way we learn. What will the future look like?",
    },
  ],
};

type AllowedTabs = keyof typeof TAB_CONTENT;

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<AllowedTabs>("New");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveTab(e.target.value as AllowedTabs);
  };

  return (
    <div className={styles.sidebar}>
      <form className={styles.titleTabs}>
        {Object.keys(TAB_CONTENT).map((heading) => (
          <label
            key={heading}
            htmlFor={heading}
            className={styles.title_tab_label}
          >
            <input
              type="radio"
              id={heading}
              className={styles.title_tab_radio}
              name="sidebar_tab"
              value={heading}
              checked={activeTab === heading}
              onChange={handleChange}
            />
            {heading}
          </label>
        ))}
      </form>
      <div className={styles.sidebar_content}>
        {Object.hasOwn(TAB_CONTENT, activeTab) && (
          <>
            {TAB_CONTENT[activeTab].map(({title, content}) => (
              <div key={title} className={styles.sidebar_item}>
                <h3 className={styles.sidebar_item_title}>{title}</h3>
                <p className={styles.sidebar_item_content}>{content}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
