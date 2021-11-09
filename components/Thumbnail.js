import Link from "next/link";
import Image from "next/image";

function Thumbnail({ item, path }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <Link href={`/${path}/${item.id}`}>
      <a>
        <div className="showcase-img">
          <div className="showcase-language">{item.original_language}</div>
          <div className="showcase-certification">{item.adult ? "R" : "G"}</div>
          <div className="showcase-year">
            {item.release_date
              ? new Date(item.release_date).getFullYear()
              : "UNK"}
          </div>
          <Image
            src={
              !item.backdrop_path && !item.poster_path
                ? `/placeholder.jpg`
                : `${BASE_URL}${item.backdrop_path || item.poster_path}`
            }
            alt={item.original_title}
            layout="responsive"
            objectFit="cover"
            height={1080}
            width={1920}
          />
        </div>
      </a>
    </Link>
  );
}

export default Thumbnail;
