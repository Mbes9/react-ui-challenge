import { ButtonPropsStyles as Props } from "./button.props";

import styles from "./button.module.scss";

export const useButtonStyles = (props: Props) => {
  const { disabled, className = "", variant = "default" } = props;

  const disabledClassName = disabled ? styles.disabled : "";
  const buttonClassName = `${styles.button} ${styles[variant]} ${disabledClassName} ${className}`;

  const labelClassName = `${styles.button__label} ${styles[variant]} ${disabledClassName} ${className}`;
  const iconClassName = `${styles.button__icon}`;
  return {
    buttonClassName,
    labelClassName,
    iconClassName
  };
};
