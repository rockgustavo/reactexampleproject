import "./Header.css";

interface titleProps {
  title?: String;
}

export function Header({ title = "VALOR DEFAULT" }: titleProps) {
  return (
    <div>
      <header className="header">{title}</header>
      <hr />
    </div>
  );
}
