// Types.
import { SEARCH_LOADING, SEARCH_ERROR, SEARCH_SUCCESS } from "./search.types";

/**
 * Object to manage the initial state for lead reducer.
 * {Object} apiActions manage the state for the endpoint.
 */
const INITIAL_STATE = {
  apiActions: {
    loading: false,
    error: "",
    success: false,
  },
  responseData: null,
};

/**
 * Manage the initial state for lead reducer.
 * @param  {Object} state is the initial state for the reducer.
 * @param {string} type action to take.
 * @param {Object} payload response for a action.
 */
const searchReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SEARCH_LOADING: // when the update endpoint is being called.
      return {
        ...state,
        apiActions: {
          loading: true,
          error: "",
          success: "",
        },
      };

    case SEARCH_ERROR: // when the update endpoint returns an error.
      return {
        ...state,
        apiActions: {
          loading: false,
          error: payload,
          success: "",
        },
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        apiActions: {
          loading: false,
          error: "",
          success: payload.success && "success",
        },
        responseData: payload,
      };

    default:
      return { ...state };
  }
};

export default searchReducer;
