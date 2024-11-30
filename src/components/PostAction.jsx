import { useDeletePost } from "../hooks/useDeletePost";
import { useEditPost } from "../hooks/useEditPost";

export const PostAction = ({ postId }) => {
  const deletePost = useDeletePost();
  const editPost = useEditPost();

  const handleDelete = () => {
    deletePost(postId);
  };
  //   const editedPost = "edited post";
  //   const handleEdit = () => {
  //     editPost(postId, editedPost);
  //   };
  return (
    <>
      <button
        className="bg-red-500 text-white my-1 p-1 rounded"
        onClick={handleDelete}
        disabled={deletePost.isLoading}
      >
        {deletePost.isLoading ? "Deleting..." : "Delete"}
      </button>
      {deletePost.isError && (
        <p className="bg-red-500 text-white px-4 py-2 rounded">
          Error: {deletePost.isError?.message}
        </p>
      )}

      <button
        className="bg-blue-500 text-white my-1 p-1 rounded"
        onClick={handleEdit}
        disabled={editPost.isLoading}
      >
        {editPost.isLoading ? "Editing..." : "Edit"}
      </button>
      {editPost.isError && (
        <p className="bg-red-500 text-white px-4 py-2 rounded">
          Error: {editPost.error?.message}
        </p>
      )}
    </>
  );
};
