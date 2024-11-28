import { createContext } from 'react';
import { usePostReducer } from './postReducer';

export const PostStateContext = createContext();
export const MethodContext = createContext();

export const GlobalProvider = ({ children }) => {
  const { postsState, addPost, removePost, editPost, searchPost, setFilter, setSort } = usePostReducer();
  return (
    <PostStateContext.Provider value={{ postsState }}>
      <MethodContext.Provider value={{ addPost, removePost, editPost, searchPost, setFilter, setSort }}>
        {children}
      </MethodContext.Provider>
    </PostStateContext.Provider>
  );
};
