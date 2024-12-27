import { FirmFactsProps as Props } from "./firm-facts.props";
import { useFirmFactsStyles } from "./firm-facts.styles";

export const FirmFacts = (props: Props) => {
  const { children } = props;
  const { firmFactsClassName } = useFirmFactsStyles();

  return <div className={firmFactsClassName}>{children}</div>;
};
