import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { movieGenres, tvGenres } from "../utils/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider({ slides, type }) {
  const sliderType = type === "movies" ? movieGenres : tvGenres;

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
              src={`${process.env.API_IMAGES}${slide.backdrop_path}`}
              alt={slide.original_title}
              objectFit="cover"
              layout="fill"
            />
            <div className="movie-detail-wrapper">
              <Container>
                <div className="movie-title">{slide.title || slide.name || slide.original_name}</div>
                <div className="movie-genre-wrapper">
                  {slide.genre_ids.length && slide.genre_ids.map((genre) => (
                    <div className="movie-genre" key={genre}>
                      {
                        sliderType.find((currGenre) => currGenre.id === genre).name
                      }
                    </div>
                  ))}
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
