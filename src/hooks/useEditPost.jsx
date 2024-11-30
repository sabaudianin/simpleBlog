import { updatePost } from "../api/postsMethods";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useEditPost = () => {
  const queryClient = useQuery();
  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return {
    action: mutation.mutate,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
  };
};
