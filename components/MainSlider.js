import { Container } from "react-bootstrap";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider() {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronDown} className="icon icon-chevron-down" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronUp} className="icon icon-chevron-up" />
      </div>
    );
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    vertical: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider className="intro-slider" {...settings}>
      <div className="intro-slide">
        <div className="intro-slide-inner">
          <img src="/1.jpg" />
          <div className="movie-detail-wrapper">
            <Container>
              <div className="movie-title">THE MARTIAN</div>
              <div className="movie-genre-wrapper">
                <div className="movie-genre">adventure</div>
                <div className="movie-genre">sci-fi</div>
                <div className="movie-genre">thriller</div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="intro-slide">
        <div className="intro-slide-inner">
          <img src="/2.jpg" />
          <div className="movie-detail-wrapper">
            <Container>
              <div className="movie-title">THE MARTIAN</div>
              <div className="movie-genre-wrapper">
                <div className="movie-genre">adventure</div>
                <div className="movie-genre">sci-fi</div>
                <div className="movie-genre">thriller</div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="intro-slide">
        <div className="intro-slide-inner">
          <img src="/3.jpg" />
          <div className="movie-detail-wrapper">
            <Container>
              <div className="movie-title">THE MARTIAN</div>
              <div className="movie-genre-wrapper">
                <div className="movie-genre">adventure</div>
                <div className="movie-genre">sci-fi</div>
                <div className="movie-genre">thriller</div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default MainSlider;
