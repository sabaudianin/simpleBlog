import { deletePost } from "../api/postsMethods";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return {
    deletePost: mutation.mutate,
    isDelting: mutation.isLoading,
    isDeleteError: mutation.isError,
    deleteError: mutation.error,
  };
};
