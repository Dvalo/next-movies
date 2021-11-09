import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { movieGenreIds } from "../utils/requests";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider({ slides }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="icon icon-chevron-down"
        />
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
      {slides.map((slide) => (
        <div className="intro-slide" key={slide.id}>
          <div className="intro-slide-inner">
            <Image
              src={`${BASE_URL}${slide.backdrop_path}`}
              alt={slide.original_title}
              objectFit="cover"
              layout="fill"
            />
            <div className="movie-detail-wrapper">
              <Container>
                <div className="movie-title">{slide.title}</div>
                <div className="movie-genre-wrapper">
                  {slide.genre_ids.map((genre) => {
                    for (var i = 0; i < movieGenreIds.length; i++) {
                      if (genre === movieGenreIds[i].id) {
                        return (
                          <div
                            className="movie-genre"
                            key={movieGenreIds[i].id}
                          >
                            {movieGenreIds[i].name}
                          </div>
                        );
                      }
                    }
                  })}
                </div>
              </Container>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default MainSlider;
