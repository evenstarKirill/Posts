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
} from "./../actions/actionsTypes";

const initial = {
  posts: [],
  error: false,
  loading: false,
  searchQuery: "",
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    }
    case GET_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case DELETE_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_POSTS_SUCCESS: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        loading: false,
      };
    }
    case DELETE_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case EDIT_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case EDIT_POSTS_SUCCESS: {
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                title: action.payload.title,
                body: action.payload.body,
              }
            : post
        ),
        loading: false,
      };
    }
    case ADD_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case ADD_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_POSTS_SUCCESS: {
      const newPost = {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      };
      console.log(newPost);
      return {
        ...state,
        posts: [...state.posts, newPost],
        loading: false,
      };
    }
    case EDIT_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case SEARCH_POSTS: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    default:
      return state;
  }
}
