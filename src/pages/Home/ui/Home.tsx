import GenresCatalog from "@widgets/GenresCatalog";
import GenresPanel from "@widgets/GenresPanel";
import styles from "./styles.module.scss";
import { useState } from "react";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState<string | null>(null);

  const handleGenreClick = (genre: string) => {
    setActiveGenre(activeGenre === genre ? null : genre);
  };

  return (
    <div className={styles.homeWrapper}>
      <GenresPanel onClick={handleGenreClick} activeGenre={activeGenre} />
      <GenresCatalog activeGenre={activeGenre} />
    </div>
  );
};

export default Home;