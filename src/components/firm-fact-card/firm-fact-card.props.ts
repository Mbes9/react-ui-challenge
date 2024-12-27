export type FirmFactCardProps = React.PropsWithChildren<{
  variant?: "default" | "border";
}>;
export type FirmFactCardStylesProps = Pick<FirmFactCardProps, "variant">;
