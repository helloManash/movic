import "./style3.css";
import { SMALL_IMAGE_COVER_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 20;

export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className="container3">
      <img
        alt={tvShow.name}
        src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path}
        className="img3"
      />
      <div className="title3">
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}