import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './redux/reducers';
import PostList from './component/PostList';

import './style.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <PostList />
      </div>
    </Provider>
  );
}
