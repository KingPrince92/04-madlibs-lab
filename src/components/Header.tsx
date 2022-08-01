import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1>Mad Libs</h1>
        <ul>
          <li>
            <Link to="/stories">See Saved Stories</Link>
          </li>
          <li>
            <Link to="/create-story">Create a New Story</Link>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default Header;
