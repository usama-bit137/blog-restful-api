import '../styles/Header.css';
export default function Header({ children, title }) {
  return (
    <div className="header sticky">
      <h1 className="header--title">{title}</h1>
      <ul className="header--link-container">{children}</ul>
    </div>
  );
}
