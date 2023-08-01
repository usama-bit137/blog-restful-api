export default function Link({ name, to }) {
  return (
    <li className="heading--bullet">
      <a href={to} className="heading--link">
        {name}
      </a>
    </li>
  );
}
