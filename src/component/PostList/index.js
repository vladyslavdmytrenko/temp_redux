import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../../redux/actions/postAction';

import UserDetail from './UserDetail';

const PostList = (props) => {
  const { posts, isLoading, error, fetchPost } = props;
  useEffect(() => {
    if (!posts && !isLoading && !error) {
      fetchPost();
    }
  });

  if (error) return <h1>Error: {error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (!posts) return <h1>No data</h1>;

  return (
    <>
      <button onClick={fetchPost}>fetchData</button>
      <button onClick={() => console.log(props.state)}>
        show state to console
      </button>
      <ul>
        {posts.map(({ userId, id, title, body }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <UserDetail userId={userId} />
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
  error: state.post.error,
  state: state,
});

export default connect(mapStateToProps, { fetchPost })(PostList);
