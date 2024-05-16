import axios from "axios";
import { ALLMOVIES, ALLMOVIESURL, AUTHTOKEN } from "../types/moviesType";

// export const getAllMoviesRedux = () => {
//   return {
//     type: ALLMOVIES,
//     payload: async () => {
//       try {
//         const response = await axios.get(ALLMOVIESURL, {
//           headers: {
//             Accept: 'application/json',
//             Authorization: AUTHTOKEN,
//           },
//         });
//         return {
//           data: response.data.results,
//           pages: response.data.total_pages,
//         };
//       } catch (error) {
//         console.error('error:', error);
//         throw error; // Optionally, you can rethrow the error for better error handling
//       }
//     },
//   };
// };

// OR and you will change the code in movieReducer file by order

export const getAllMoviesRedux = () => {
  return async (dispatch) => {
    const response = await axios.get(ALLMOVIESURL, {
      headers: {
        Accept: "application/json",
        Authorization: AUTHTOKEN,
      },
    });
    dispatch({type: ALLMOVIES, data: response.data.results, pages: response.data.total_pages})
  };
};


export const getSearchedMovieRedux = (word) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=60a9c95f56a86315f2a9352653b2308d`
    );

    dispatch({type: ALLMOVIES, data: response.data.results, page: response.data.total_pages})

  }
}


export const getCurrentPageRedux = (page) => {
  return async (dispatch) => {
    const pageNum = page > 0 ? page : 1; // Set pageNum to 1 if page is 0 or less
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNum}&sort_by=popularity.desc`,
      {
        headers: {
          Accept: "application/json",
          Authorization: AUTHTOKEN,
        },
      }
    );
    dispatch({ type: ALLMOVIES, data: response.data.results, page: response.data.total_pages });
  };
};