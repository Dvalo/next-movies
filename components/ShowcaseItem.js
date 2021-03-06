import Link from "next/link";
import Thumbnail from "./Thumbnail";

function ShowcaseItem({ item, descType, path }) {
  return (
    <div className="showcase-item">
      <Thumbnail item={item} path={path} />
      <div className="showcase-desc">
        {descType === "movie" ? item.overview : (item.character ? `Played as: ${item.character}` : item.overview)}
      </div>
      <Link href={`/${path}/${item.id}`}>
        <a className="showcase-title">{item.title || item.name}</a>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
