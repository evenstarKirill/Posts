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
import {
  addPostFailure,
  addPostRequest,
  addPostSuccess,
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
  editPostFailure,
  editPostRequest,
  editPostSuccess,
  getPostFailure,
  getPostRequest,
  getPostSuccess,
  searchPost,
} from "./../actions/actions";

export const getPostsThunk = () => async (dispatch) => {
  dispatch(getPostRequest());
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await request.json();
    console.log("data", data);
    dispatch(getPostSuccess(data));
  } catch (err) {
    dispatch(getPostFailure());
  }
};

export const deletePostsThunk =
  ({ post_id }) =>
  async (dispatch) => {
    dispatch(deletePostRequest());
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post_id}`,
        { method: "DELETE" }
      );
      const data = await request.json();
      console.log("data", data);
      dispatch(deletePostSuccess(post_id));
    } catch (err) {
      dispatch(deletePostFailure());
    }
  };

export const editPostsThunk =
  ({ post_id, title, body }) =>
  async (dispatch) => {
    dispatch(deletePostRequest());
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post_id}`,
        { method: "PUT" }
      );
      const data = await request.json();
      console.log("data", data);
      dispatch(editPostSuccess(post_id, title, body));
    } catch (err) {
      dispatch(editPostFailure());
    }
  };

export const addPostsThunk =
  ({ post_id, title, body }) =>
  async (dispatch) => {
    dispatch(deletePostRequest());
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        { method: "POST" }
      );
      const data = await request.json();
      console.log("data", data);
      dispatch(addPostSuccess(post_id, title, body));
    } catch (err) {
      dispatch(addPostFailure());
    }
  };
