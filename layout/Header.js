import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { mainNavItems } from "../utils/utils";

function Header() {
  const router = useRouter();
  return (
    <Container className="position-relative">
      <nav className="main-nav">
        <ul>
          {mainNavItems.map(({ name, path }) => (
            <li key={name}>
              <Link href={path}>
                <a className={router.pathname == path ? "active" : ""}>
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
