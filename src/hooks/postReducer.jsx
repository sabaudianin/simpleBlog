import { useReducer, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ActionType = {
  ADD_POST: 'ADD_POST',
  REMOVE_POST: 'REMOVE_POST',
  SET_FILTER: 'SET_FILTER',
  SET_SORT: 'SET_SORT',
  EDIT_POST: 'EDIT_POST',
  SEARCH_POST: 'SEARCH_POST',
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ActionType.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case ActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ActionType.SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case ActionType.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload.editedPost } : post
        ),
      };
    case ActionType.SEARCH_POST:
      return {
        ...state,
        filteredPosts: state.posts.filter((post) => post.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export const usePostReducer = () => {
  const [postsState, dispatch] = useReducer(postReducer, { posts: [], filteredPosts: [], filter: '', sort: '' });

  const addPost = useCallback((post) => {
    const { title, body, user } = post;
    if (!title.trim() || !body.trim()) {
      console.error('title & body needed');
      return;
    }
    const newPost = { id: uuidv4(), title, body, user };
    dispatch({
      type: ActionType.ADD_POST,
      payload: newPost,
    });
  }, []);

  const removePost = useCallback((postId) => {
    dispatch({
      type: ActionType.REMOVE_POST,
      payload: postId,
    });
  }, []);

  const editPost = useCallback((postId, editedPost) => {
    dispatch({
      type: ActionType.EDIT_POST,
      payload: { id: postId, editedPost },
    });
  }, []);

  const searchPost = useCallback((postId) => {
    dispatch({
      type: ActionType.SEARCH_POST,
      payload: postId,
    });
  }, []);

  const setFilter = useCallback((filter) => {
    dispatch({
      type: ActionType.SET_FILTER,
      payload: filter,
    });
  }, []);
  const setSort = useCallback((sort) => {
    dispatch({
      type: ActionType.SET_SORT,
      payload: sort,
    });
  }, []);

  return { postsState, addPost, removePost, editPost, searchPost, setFilter, setSort };
};
