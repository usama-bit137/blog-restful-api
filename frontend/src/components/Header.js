import '../styles/Header.css';
export default function Header() {
  return (
    <div className="header">
      <h1 className="header--title">The Llama Zone </h1>
      {/* <span style={{ fontSize: 'small', flex: 'wrap' }}>
        : Full-Stack Developer and Theoretical Physicist
      </span> */}
      <ul className="header--link-container">
        <Link name="Home" />
        <Link name="About" />
        <Link name="Contact Me" />
      </ul>
    </div>
  );
}

function Link(props) {
  return (
    <li className="heading--bullet">
      <a href="/" className="heading--link">
        {props.name}
      </a>
    </li>
  );
}
