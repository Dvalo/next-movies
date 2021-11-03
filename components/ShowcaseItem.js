import Link from "next/link";
import Thumbnail from "./Thumbnail";

function ShowcaseItem({ item }) {
  return (
    <div className="showcase-item">
      <Thumbnail item={item} />
      <div className="showcase-desc">{item.overview}</div>
      <Link href={`/movie/${item.id}`}>
        <a className="showcase-title">{item.title}</a>
      </Link>
    </div>
  );
}

export default ShowcaseItem;
