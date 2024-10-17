import LatestNews from "../../components/LatestNews/LatestNews";
import styles from "./styles.module.css";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import { useTheme } from "../../context/ThemeContext";

const Main = () => {
  const { isDark } = useTheme();
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters/>
    </main>
  );
};

export default Main;
