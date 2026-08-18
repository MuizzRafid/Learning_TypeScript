//reuse

import type { ComponentProps, CSSProperties } from "react";

type ButtonBaseProps = ComponentProps<"button">;
//ComponentProps is a utility type from React's own type definitions (@types/react)

type ButtonProps = ButtonBaseProps & { variant?: "primary" | "secondary" };
//the style and the other properties comes from component props which
//help us to get htmlbutton element
export function Button({ variant = "primary", style, ...rest }: ButtonProps) {
  //variant — your custom prop, defaulted to "primary"
  //style — pulled out specifically, because you want to merge it with your own base styles rather than just pass it through untouched
  //...rest — everything else from ButtonProps that wasn't explicitly named (onClick, disabled, type, className, etc.) — gathered into one object via rest destructuring (same ... "gather" mechanic from your earlier

  const base: CSSProperties = {
    padding: "10px",
  };
  return <button style={{ ...base, ...style }} {...rest}></button>;
}
