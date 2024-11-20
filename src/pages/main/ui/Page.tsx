import LatestNews from "./LatestNews/LatestNews";
import styles from "./styles.module.css";
import NewsByFilters from "./NewsByFilters/NewsByFilters";


const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews/>

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
