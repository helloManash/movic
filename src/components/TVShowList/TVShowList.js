import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

import "./style5.css";

export function TVShowList({ tvShowList , onClickItem}) {
  return (
    <div>
      <div className="title5">You may like :</div>
      <div className="list5">
        {tvShowList.map((tvshow) => {
          return (
            <span className="tv_show_item5" key={tvshow.id}>
              <TVShowListItem
                tvShow={tvshow}
                onClick={onClickItem}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
