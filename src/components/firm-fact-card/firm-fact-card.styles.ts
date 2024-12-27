import styles from "./firm-fact-card.module.scss";
import { FirmFactCardStylesProps as Props } from "./firm-fact-card.props";

export const useFirmFactCardStyles = (props: Props) => {
  const { variant = "default" } = props;

  const firmFactCardClassName = `${styles.firmFactCard} ${styles[variant]}`;

  return { firmFactCardClassName };
};
