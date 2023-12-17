import "./style4.css";
import "./global.css";
import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/logo/logo";
import logoImage from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  function updateCurrentTVShow(tvshow){
    setCurrentTVShow(tvshow);
  }
  async function fetchRecommendations(tvShowId) {
    const RecommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);

    
    if (RecommendationListResp.length > 0) {
      setRecommendationList(RecommendationListResp.slice(0,10));
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTVShow){

      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recommendationList);
  return (
    <div
      className="main_container"
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              image={logoImage}
              title="movic"
              subtitle="Find a show you like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="tv_show_detail">
        {currentTVShow && <TVShowDetails tvshow={currentTVShow} />}
      </div>
      <div className="recommend_tv_shows">
      {currentTVShow &&<TVShowList onClickItem={updateCurrentTVShow} tvShowList = {recommendationList}  />}
      </div>
    </div>
  );
}

export default App;
