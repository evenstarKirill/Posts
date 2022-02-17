import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

const reducers = combineReducers({ post: reducer });

const sagaMiddleWare = createSagaMiddleware();

const store = compose(applyMiddleware(sagaMiddleWare))(createStore)(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleWare.run(rootSaga);

export default store;
