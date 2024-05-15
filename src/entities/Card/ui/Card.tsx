import { type FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames/bind";

type Items = {
  name: string;
  image: string;
  bgColor: string;
};

interface CardProps {
  items: Items;
}

const cx = cn.bind(styles);

const Card: FC<CardProps> = ({ items }) => {
  const cardImageWrapperClasses = cx({
    [styles.cardImageWrapper]: true,
    [styles.customBgColor]: true,
  });

  const { name, image, bgColor } = items;

  return (
    <div className={styles.cardWrapper}>
      <div
        className={cardImageWrapperClasses}
        style={{ background: bgColor }}
      >
        <img src={image} alt={name} className={styles.cardImage} />
      </div>
      <div className={styles.cardName}>{name}</div>
    </div>
  );
};

export default Card;
