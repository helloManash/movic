import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake-data";


const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTk0NGE4MjZkZjIzMjY2NWQwNGM0MmM5NTUzMTRjZCIsInN1YiI6IjY0YjIwODc4ZTBjYTdmMDEwNjk2ZTNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q7jTG7jIUMkS4N_j_L9KYuOleD1QxbT0-3ny95iNiXI";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/tv/popular", {
        params: {
          language: "en-US",
          page: "1"  
        },
        headers: {
            accept: 'application/json',
          Authorization: `Bearer ${API_KEY}` 
        }
      });
      return response.data.results;
    } catch (error) {
      
      throw error;
    }
  }
  static async fetchRecommendations(tvShowId){
    try {
          const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}/recommendations`, {
            params: {
              language: "en-US",
              page: "1"  
            },
            headers: {
                accept: 'application/json',
              Authorization: `Bearer ${API_KEY}` 
            }
          });
          
          return response.data.results;
        } catch (error) {
          
          throw error;
        }
  }
}