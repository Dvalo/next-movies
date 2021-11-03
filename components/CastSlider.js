import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CastSlider({ cast }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <Slider className="cast-slider" {...settings}>
      {cast[0].cast.slice(0, 20).map((castMember) => (
        <div className="cast-slide" key={castMember.id}>
          <img src={`${BASE_URL}${castMember.profile_path}`} />
          <div className="cast-details">
            <div className="cast-name">{castMember.name}</div>
            <div className="cast-character-name">as {castMember.character}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CastSlider;