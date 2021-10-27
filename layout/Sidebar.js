import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainNavItems } from "../utils/utils";

function Sidebar() {
  const router = useRouter();

  return (
    <nav className="secondary-nav">
      <ul>
        {mainNavItems.map(({ name, path, secondary, icon }) => (
          <li key={name}>
            <Link href={path}>
              <a className={router.pathname.startsWith(secondary) ? "active" : ""}>
                <FontAwesomeIcon icon={icon} className="nav-icon" />
                <span>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
