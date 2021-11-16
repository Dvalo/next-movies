import Image from "next/image";

function ActorItem({ actor, character }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp
  return (
    <a href={`/actor/${actor.id}`} className="actor-item">
      <Image
        src={
          !actor.profile_path
            ? `/placeholder_actor.jpg`
            : `${BASE_URL}${actor.profile_path}`
        }
        alt={actor.name}
        objectFit="cover"
        height={460}
        width={306}
      />
      <div className="cast-details">
        <div className="cast-name">{actor.name}</div>
        {character && (
          <div className="cast-character-name">as {actor.character}</div>
        )}
      </div>
    </a>
  );
}

export default ActorItem;
