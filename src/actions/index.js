import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams2-client");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams2-client/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

//async action creator -- using redux thunk
//return arrow function from action creator with dispatch as first arg
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams2-client", {
    ...formValues,
    userId,
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  //programatic navigation
  history.push("/streams2-client");
};

//put request updates all properties of a record
//patch request updates some properties
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams2-client/${id}`, {
    ...formValues,
  });

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/streams2-client");
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams2-client/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/streams2-client");
};
