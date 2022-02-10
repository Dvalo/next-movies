import Image from "next/image";

function TvSeasonItem({ season }) {
  return (
    <div className="showcase-season">
      <div className="season-poster">
        <Image
          src={
            !season.poster_path
              ? `/placeholder.jpg`
              : `${process.env.API_IMAGES}${season.poster_path}`
          }
          alt={season.name}
          objectFit="cover"
          height={280}
          width={220}
        />
      </div>
      <div className="showcase-season-details">
        <div className="season-name">{season.name}</div>
        <div className="season-desc">
          {season.overview ? season.overview : "This season has no overview."}
        </div>
        <div className="season-episodes">
          <b>{season.episode_count} episodes</b>
        </div>
      </div>
    </div>
  );
}

export default TvSeasonItem;
