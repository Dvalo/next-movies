import Thumbnail from "./Thumbnail";

function ShowcaseItem({ item }) {
  return (
    <div className="showcase-item">
      <Thumbnail item={item} />
      <div className="showcase-desc">{item.overview}</div>
      <div className="showcase-title">{item.title}</div>
    </div>
  );
}

export default ShowcaseItem;
