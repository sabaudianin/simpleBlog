import { deletePost } from "../api/postsMethods";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return { mutate, isLoading, isError, error };
};
