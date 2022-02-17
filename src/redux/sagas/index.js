import {
  ADD_POSTS_FAILURE,
  ADD_POSTS_REQUEST,
  ADD_POSTS_SUCCESS,
  DELETE_POSTS_FAILURE,
  DELETE_POSTS_REQUEST,
  DELETE_POSTS_SUCCESS,
  EDIT_POSTS_FAILURE,
  EDIT_POSTS_REQUEST,
  EDIT_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./../actions/actionsTypes";
import { call, put, takeLatest } from "redux-saga/effects";

async function getPostsRequest() {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await request.json();
  return data;
}

async function deletePostsRequest(post_id) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`,
    { method: "DELETE" }
  );
  const data = await request.json();
  return data;
}

async function editPostsRequest(post_id) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`,
    { method: "PUT" }
  );
  const data = await request.json();
  return data;
}

async function addPostsRequest(post_id) {
  const request = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "POST",
  });
  const data = await request.json();
  return data;
}

export function* loadPosts() {
  try {
    const posts = yield call(getPostsRequest);
    yield put({ type: GET_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: GET_POSTS_FAILURE });
  }
}

export function* deletePosts(action) {
  const { payload } = action;
  console.log(action);
  try {
    yield call(deletePostsRequest, payload);
    yield put({ type: DELETE_POSTS_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: DELETE_POSTS_FAILURE });
  }
}

export function* editPosts(action) {
  const { payload } = action;
  console.log(action);
  try {
    yield call(editPostsRequest, payload.id);
    yield put({ type: EDIT_POSTS_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: EDIT_POSTS_FAILURE });
  }
}

export function* addPosts(action) {
  const { payload } = action;
  console.log(action);
  try {
    const { id } = yield call(addPostsRequest, payload.id);
    yield put({ type: ADD_POSTS_SUCCESS, payload: { ...payload, id } });
  } catch (error) {
    yield put({ type: ADD_POSTS_FAILURE });
  }
}

export function* watchClickSaga() {
  yield takeLatest(GET_POSTS_REQUEST, loadPosts);
  yield takeLatest(DELETE_POSTS_REQUEST, deletePosts);
  yield takeLatest(EDIT_POSTS_REQUEST, editPosts);
  yield takeLatest(ADD_POSTS_REQUEST, addPosts);
}

export default function* rootSaga() {
  // console.log('saga')
  yield watchClickSaga();
}
