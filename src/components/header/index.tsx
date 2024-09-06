interface titleProps {
  title?: String;
}

export function Header({ title = "VALOR DEFAULT" }: titleProps) {
  return (
    <header className="header">
      <header> {title}</header>
    </header>
  );
}
