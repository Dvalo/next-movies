import Image from "next/image";

function ActorItem({ actor, character }) {
  return (
    <a href={`/actor/${actor.id}`} className="actor-item">
      <Image
        src={
          !actor.profile_path
            ? `/placeholder_actor.jpg`
            : `${process.env.API_IMAGES}${actor.profile_path}`
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
