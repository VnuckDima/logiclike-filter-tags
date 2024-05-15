import styles from "./styles.module.scss";
import Genre from "@entities/Genre";
import { FC, useCallback, useMemo } from "react";
import useCourses from "@shared/hooks/useCourses";

interface GenresPanelProps {
  activeGenre: string | null;
  onClick: (title: string) => void;
}

const GenresPanel: FC<GenresPanelProps> = ({ onClick, activeGenre }) => {
  const courses = useCourses();
  

  const uniqueTags = useMemo(() => {
    if (!courses) return ['Все темы'];
    const allTags = courses.reduce((tags: string[], course) => {
      return [...tags, ...course.tags];
    }, []);
    return ['Все темы', ...new Set(allTags)];
  }, [courses]);

  const handleClick = useCallback((tag: string) => {
    onClick(tag);
  }, [onClick]);

  return (
    <div className={styles.panelWrapper}>
      {uniqueTags &&
        uniqueTags.map((tag) => {
          return (
            <Genre
              key={tag}
              title={tag}
              isActive={tag === activeGenre}
              onClick={() => handleClick(tag)}
            />
          );
        })}
    </div>
  );
};

export default GenresPanel;
