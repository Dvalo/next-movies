import Image from "next/image";

function Thumbnail({ item }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="showcase-img">
      <div className="showcase-language">{item.original_language}</div>
      <div className="showcase-certification">{item.adult ? "R" : "G"}</div>
      <div className="showcase-year">
        {new Date(item.release_date).getFullYear()}
      </div>
      <Image
        src={`${BASE_URL}${item.backdrop_path || item.poster_path}`}
        alt={item.original_title}
        layout="responsive"
        objectFit="cover"
        height={1080}
        width={1920}
      />
    </div>
  );
}

export default Thumbnail;
