import { PostStateContext, MethodContext } from './GlobalProvider';
import { useContext } from 'react';

export const useMethodContext = () => {
  const context = useContext(MethodContext);
  if (context === undefined) {
    throw new Error('Trying use context outside provider');
  }
  return context;
};
export const useStateContext = () => {
  const context = useContext(PostStateContext);
  if (context === undefined) {
    throw new Error('Trying use context outside provider');
  }
  return context;
};
