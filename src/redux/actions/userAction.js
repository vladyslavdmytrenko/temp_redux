import _ from 'lodash';

import api from '../../api';

export const FETCH_USER = 'FETCH_USER';
export const SET_LOAD_USER = 'SET_LOAD_USER';
export const SET_ERROR_USER = 'SET_ERROR_USER';

export const fetchUser = (id) => async (dispatch) => {
  // dispatch({ type: SET_LOAD_USER, payload: true });
  try {
    const response = await api.get('/users/' + id);
    dispatch({ type: FETCH_USER, payload: response });
  } catch (e) {
    dispatch({ type: SET_ERROR_USER, payload: e });
  } finally {
    // dispatch({ type: SET_LOAD_USER, payload: false });
  }
};

export const setUserLoading = (isLoading) => (dispatch) => {
  dispatch({ type: SET_LOAD_USER, isLoading });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   dispatch({ type: SET_LOAD_USER, payload: true });
//   try {
//     const response = await api.get('/users/' + id);
//     console.log(response);
//     dispatch({ type: FETCH_USER, payload: response });
//   } catch (e) {
//     dispatch({ type: SET_ERROR_USER, payload: e });
//   } finally {
//     dispatch({ type: SET_LOAD_USER, payload: false });
//   }
// });
