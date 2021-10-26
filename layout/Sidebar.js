import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faVideo, faUserFriends } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <nav className="secondary-nav">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} className="nav-icon" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faFilm} className="nav-icon" />
            <span>Movies</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faVideo} className="nav-icon" />
            <span>Tv Shows</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faUserFriends} className="nav-icon" />
            <span>Actors</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
