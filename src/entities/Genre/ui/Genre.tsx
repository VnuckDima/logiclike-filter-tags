import { type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface GenreProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const Genre: FC<GenreProps> = ({ isActive, title, onClick }) => {
  return (
    <div
      className={cn(styles.genreWrapper, {
        [styles.genreWrapperActive]: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Genre;
