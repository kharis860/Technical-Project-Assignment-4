import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navItem">
          <li>
            <a href=""></a>
          </li>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
