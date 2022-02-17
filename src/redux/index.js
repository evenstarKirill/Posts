import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import reducer from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ post: reducer });

const store = compose(applyMiddleware(thunk))(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
