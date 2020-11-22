import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    POST_ACTION_SUCCESS,
    POST_ACTION_ERROR,
  } from "../actions/index";
  
  const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          fetchingSmurfs: true,
        };
  
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false,
          error: "",
        };
  
      case FETCH_SMURFS_ERROR:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload,
        };
  
      case POST_ACTION_SUCCESS:
        const newSmurf = {
          name: action.payload,
          location: "",
          id: Date.now(),
        };
        return { ...state, smurf: [...state.smurfs, newSmurf] };
  
      case POST_ACTION_ERROR:
        return {
          ...state,
          addSmurf: false,
          error: action.payload,
          fetchingSmurfs: false,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  