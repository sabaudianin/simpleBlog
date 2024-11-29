import { updatePost } from "../api/postsMethods";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useEditPost = () => {
  const queryClient = useQuery();
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return { mutate, isLoading, isError, error };
};
