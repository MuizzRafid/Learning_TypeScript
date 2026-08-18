import type { PropsWithChildren, ReactNode } from "react";

type PanelProps = {
  title: string;
  children?: ReactNode;
};

interface RequiredChildrenProps extends PropsWithChildren {
  title: string;
  children: ReactNode;
}
export function RequiredChildrenPanel({
  title,
  children,
}: RequiredChildrenProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
