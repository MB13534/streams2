import _ from "lodash";

import {
  FETCH_STREAMS,
  FETCH_STREAM,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      //lodash _.mapKeys turns an array into an object. second argument is what array item gets used as the key value
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //lodash _.omit removes whole item matching key value, returns a new object
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default streamReducer;
