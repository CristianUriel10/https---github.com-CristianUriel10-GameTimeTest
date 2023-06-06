// Types.
import { SEARCH_LOADING, SEARCH_ERROR, SEARCH_SUCCESS } from "./search.types";

// Endpoints.
import { search } from "./search.api";

export const actionSearch = (value) => async (dispatch) => {
  dispatch({
    type: SEARCH_LOADING,
  });
  await search(value)
    .then((response) => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SEARCH_ERROR,
        payload: error,
      });
    });
};
