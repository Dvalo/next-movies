import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainNavItems } from "../utils/utils";

function Sidebar() {
  return (
    <nav className="secondary-nav">
      <ul>
        {mainNavItems.map(({ name, path, icon }) => (
          <li key={name}>
            <a href={path}>
              <FontAwesomeIcon icon={icon} className="nav-icon" />
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
