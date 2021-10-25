import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faVideo } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <nav className="secondary-nav">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} className="test" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFilm} className="test" />
            <span>Movies</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faVideo} className="test" />
            <span>Tv Shows</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
