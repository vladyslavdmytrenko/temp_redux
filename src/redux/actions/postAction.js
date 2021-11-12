import api from '../../api';
import { fetchUser, setUserLoading } from './userAction';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_LOAD_POST = 'SET_LOAD_POST';
export const SET_ERROR_POST = 'SET_ERROR_POST';

export const fetchPost = () => async (dispatch) => {
  dispatch({ type: SET_LOAD_POST, payload: true });

  try {
    const response = await api.get('/posts/?_limit=10');
    dispatch({ type: FETCH_POSTS, payload: response });
  } catch (e) {
    dispatch({ type: SET_ERROR_POST, payload: e });
  } finally {
    dispatch({ type: SET_LOAD_POST, payload: false });
  }
};

// export const fetchPostAndUser = async (dispatch, getState) => {
//   await dispatch(fetchPost());
//   const userIds = _.uniq(_.map(getState().posts, 'userId'));
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };
export const fetchPostAndUser = async (dispatch, getState) => {
  await dispatch(fetchPost());

  dispatch(setUserLoading(true));

  await _.chain(getState().post)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();

  dispatch(setUserLoading(false));
};
