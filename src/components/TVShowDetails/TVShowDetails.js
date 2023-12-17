import { FiveStarRatings } from '../FiveStarRatings/fiveStarRatings';
import './style2.css';
export function TVShowDetails({ tvshow }) {

  const rating = tvshow.vote_average /2;
  return (
    <div>
      <div className="title2">{tvshow.name}</div>
      <div className="rating" >
        <FiveStarRatings rating={rating}/>
        <span>{rating}/5</span></div>
      <div className="overview">{tvshow.overview}</div>
    </div>
  );
}
