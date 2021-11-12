import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../../redux/actions/userAction';

const UserDetail = (props) => {
  const { userId, user, error, isLoading, fetchUser } = props;

  useEffect(() => {
    if (!user && !error && !isLoading) {
      fetchUser(userId);
    }
  });
  if (isLoading) return <h3>Loading</h3>;

  return <h3>Name: {user.name}</h3>;
};

const mapStateToProps = (state, props) => {
  return {
    user:
      !!state.user.users.length &&
      state.user.users.find((item) => {
        console.log(item);
        return item.id === props.userId;
      }),
    isLoading: state.user.isLoading,
    error: state.user.error,
  };
};

export default connect(mapStateToProps, { fetchUser })(UserDetail);
