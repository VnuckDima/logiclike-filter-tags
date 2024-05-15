import Card from "@entities/Card";
import styles from "./styles.module.scss";
import { FC } from "react";
import useCourses from "@shared/hooks/useCourses";

interface GenresCatalogProps {
  activeGenre: string | null;
}

const GenresCatalog: FC<GenresCatalogProps> = ({ activeGenre }) => {
  const courses = useCourses();

  const filteredCourses = activeGenre
    ? courses?.filter((course) => {
        if (activeGenre === "Все темы") {
          return courses;
        }
        return course.tags.includes(activeGenre);
      })
    : courses;

  return (
    <div className={styles.catalogWrapper}>
      {filteredCourses &&
        filteredCourses.map((course) => {
          return <Card key={course.id} items={course} />;
        })}
    </div>
  );
};

export default GenresCatalog;
