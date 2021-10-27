import Image from "next/image";
import { Container } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ isFluid }) {
  return (
    <footer>
      <div className="footer-top">
        <Container fluid={isFluid ? true : false}>
          <div className="copyright-logo">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/logo-primary-long.svg"
                alt="TMDB"
                height={70}
                width={400}
              />
            </a>
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container fluid={isFluid ? true : false}>
          <div className="footer-bottom-inner">
            <div className="copyright">
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </div>
            <div className="source">
              <a
                href="https://github.com/Dvalo/next-movies"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="icon icon-footer" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
