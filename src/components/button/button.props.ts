type HTMLButtonElementAttributes = React.ComponentPropsWithoutRef<"button">;

export type ButtonProps = React.PropsWithChildren<
  HTMLButtonElementAttributes &
    (
      | {
          variant?: "default";
          icon?: React.ReactNode;
        }
      | {
          variant: "icon";
          icon: React.ReactNode;
        }
    )
>;
export type ButtonPropsStyles = Pick<
  ButtonProps,
  "disabled" | "className" | "variant"
>;
