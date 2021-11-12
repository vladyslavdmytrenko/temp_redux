import {
  FETCH_POSTS,
  SET_ERROR_POST,
  SET_LOAD_POST,
} from '../actions/postAction';

const INIT_STATE = {
  isLoading: false,
  error: null,
  posts: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    case SET_ERROR_POST:
      return { ...state, error: action.payload };

    case SET_LOAD_POST:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
