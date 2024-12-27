import { ButtonProps as Props } from "./button.props";
import { useButtonStyles } from "./button.styles";

export const Button = (props: Props) => {
  const { children, icon, disabled, className, variant, ...rest } = props;
  const { buttonClassName, labelClassName, iconClassName } = useButtonStyles({
    variant,
    disabled,
    className
  });

  const withIcon = variant === "icon";
  const title = typeof children === "string" ? children : undefined;

  return (
    <button disabled={disabled} className={buttonClassName} {...rest}>
      {withIcon && <span className={iconClassName}>{icon}</span>}
      <span title={title} className={labelClassName}>
        {children}
      </span>
    </button>
  );
};
