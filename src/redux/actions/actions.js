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
  SEARCH_POSTS,
} from "./actionsTypes";

export const deletePostFailure = () => ({
  type: DELETE_POSTS_FAILURE,
});

export const deletePostRequest = (id) => ({
  type: DELETE_POSTS_REQUEST,
  payload: id,
});

export const deletePostSuccess = (id) => ({
  type: DELETE_POSTS_SUCCESS,
  payload: id,
});

export const getPostFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const getPostRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostSuccess = () => ({
  type: GET_POSTS_SUCCESS,
});

export const editPostFailure = () => ({
  type: EDIT_POSTS_FAILURE,
});

export const editPostRequest = () => ({
  type: EDIT_POSTS_REQUEST,
});

export const editPostSuccess = (id, title, body) => ({
  type: EDIT_POSTS_SUCCESS,
  payload: {
    id,
    title,
    body,
  },
});

export const postPostFailure = () => ({
  type: ADD_POSTS_FAILURE,
});

export const postPostRequest = () => ({
  type: ADD_POSTS_REQUEST,
});

export const postPostSuccess = (id, title, body) => ({
  type: ADD_POSTS_SUCCESS,
  payload: {
    id,
    title,
    body,
  },
});

export const searchPost = (query) => ({
  type: SEARCH_POSTS,
  payload: query,
});
