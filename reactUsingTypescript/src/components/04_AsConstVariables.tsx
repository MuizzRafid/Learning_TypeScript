const VARIANTS = ["primary", "secondary", "ghost"] as const;
type Variant = (typeof VARIANTS)[number];

type BadgeProps = {
  label: string;
  variant?: Variant;
};

export function Badge({ label, variant = "primary" }: BadgeProps) {
  const styles: Record<Variant, React.CSSProperties> = {
    primary: {
      color: "red",
      fontSize: "25px",
      fontWeight: "bold",
      paddingTop: "10px",
    },
    secondary: {
      color: "green",
      fontSize: "25px",
      fontWeight: "bold",
      paddingTop: "10px",
    },
    ghost: {
      color: "black",
      fontSize: "25px",
      fontWeight: "bold",
      paddingTop: "10px",
    },
  };
  return <span style={styles[variant]}>{label}</span>;
}
