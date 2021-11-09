import Link from "next/link";
import Thumbnail from "./Thumbnail";

function ShowcaseItem({ item, descType }) {
  return (
    <div className="showcase-item">
      <Thumbnail item={item} />
      <div className="showcase-desc">
        {descType === "movie" ? item.overview : `Played as: ${item.character}`}
      </div>
      <Link href={`/movie/${item.id}`}>
        <a className="showcase-title">{item.title}</a>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
