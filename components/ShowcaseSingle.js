import Link from "next/link";
import Image from "next/image";
import { Container } from "react-bootstrap";
import CastSlider from "./CastSlider";
import MovieTrailer from "./MovieTrailer";

function ShowcaseSingle({ type, showcase, videos, cast }) {
  return (
    <div className="showcase-single">
      <div className="showcase-image">
        <Image
          src={`${process.env.API_IMAGES}${
            showcase.backdrop_path || showcase.poster_path
          }`}
          alt={showcase.original_title}
          layout="responsive"
          objectFit="cover"
          height={690}
          width={1920}
        />
        <div className="showcase-details-wrapper">
          <Container className="px-3 px-md-5" fluid>
            <div className="showcase-title">
              {type === "tv" ? showcase.name : showcase.original_title}
            </div>
            <div className="showcase-details">
              <div className="showcase-date">
                {type === "tv" && <span>First aired: </span>}
                {new Date(
                  type === "tv"
                    ? showcase.first_air_date
                    : showcase.release_date
                ).toDateString()}
              </div>
              {type !== "tv" && (
                <div className="showcase-dot showcase-length">
                  {Math.floor(showcase.runtime / 60)}hr {showcase.runtime % 60}
                  min
                </div>
              )}
              {type === "tv" && (
                <div className="showcase-dot showcase-seasons">
                  Number of seasons: {showcase.number_of_seasons}
                </div>
              )}
            </div>
            <div className="showcase-genres">
              {showcase.genres.map((genre) => (
                <Link
                  href={`/${type === "tv" ? "tvshows" : "movies"}/${genre.id}`}
                  key={genre.id}
                >
                  <a className="showcase-genre">{genre.name}</a>
                </Link>
              ))}
            </div>
            <div className="showcase-desc">{showcase.overview}</div>
            <div className="showcase-trailer-wrapper">
              {videos.results &&
                videos.results
                  .slice(0, 4)
                  .map((video, index) => (
                    <MovieTrailer
                      trailer={video}
                      index={index}
                      key={video.key}
                    />
                  ))}
            </div>
          </Container>
        </div>
      </div>
      <div className="showcase-complete-details">
        <Container className="px-5" fluid>
          <h1 className="sect-title">
            <span>Popular</span> cast
          </h1>
          <CastSlider cast={cast.cast} />
        </Container>
      </div>
    </div>
  );
}

export default ShowcaseSingle;
