type GreetProps = {
  name?: string;
  shout?: boolean;
};

export function GreetA({ name = "guest", shout = false }: GreetProps) {
  const text = shout ? name.toUpperCase() : name;
  return <p>Hi {text}</p>;
}

export function GreetB(props: GreetProps) {
  const name = props.name ?? "guest";
  const shout = props.shout ?? false;
  const text = shout ? name.toUpperCase() : name;
  return <p>hi {text}</p>;
}
