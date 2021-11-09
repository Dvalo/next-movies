import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorItem from "./ActorItem";

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
        <ActorItem actor={castMember} character={true} key={castMember.id} />
      ))}
    </Slider>
  );
}

export default CastSlider;
