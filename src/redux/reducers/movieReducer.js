import { ALLMOVIES } from '../types/moviesType';

const initialValue = {
  movies: [],
  pageCount: 0,
};

// export const movieReducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case ALLMOVIES:
//       return action.payload().then(
//         (payload) => ({
//           ...state,
//           movies: payload.data,
//           pageCount: payload.pages,
//         }),
//         (error) => ({ ...state, error: error.toString() })
//       );
//     default:
//       return state;
//   }
// };


// OR

export const movieReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return {movies: action.data, pageCount: action.pages}
    default:
      return state;
  }
}