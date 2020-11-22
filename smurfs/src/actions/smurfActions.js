import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";
export const POST_ACTION_SUCCESS = "POST_ACTION_SUCCESS";
export const POST_ACTION_ERROR = "POST_ACTION_ERROR";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      // console.log(res.data)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_ERROR, payload: err.res });
    });
};
export const postAction = (newSmurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: POST_ACTION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_ACTION_ERROR, payload: err.response });
    });
};
