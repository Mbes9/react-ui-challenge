import { FirmFactCardProps as Props } from "./firm-fact-card.props";
import { useFirmFactCardStyles } from "./firm-fact-card.styles";

export const FirmFactCard = (props: Props) => {
  const { children, variant = "default" } = props;
  const { firmFactCardClassName } = useFirmFactCardStyles({ variant });

  return <div className={firmFactCardClassName}>{children}</div>;
};
