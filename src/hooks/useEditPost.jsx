import { updatePost } from "../api/postsMethods";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useEditPost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return {
    editPost: mutation.mutate,
    isSaving: mutation.isLoading,
    isEditError: mutation.isError,
    editError: mutation.error,
  };
};
