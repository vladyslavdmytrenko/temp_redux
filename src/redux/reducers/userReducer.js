import {
  FETCH_USER,
  SET_ERROR_USER,
  SET_LOAD_USER,
} from '../actions/userAction';

const INIT_STATE = {
  isLoading: false,
  error: null,
  users: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, users: [...state.users, action.payload] };

    case SET_ERROR_USER:
      return { ...state, error: action.payload };

    case SET_LOAD_USER:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
