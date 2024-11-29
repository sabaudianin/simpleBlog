import { useDeletePost } from "../hooks/useDeletePost";
import { useEditPost } from "../hooks/useEditPost";

export const PostAction = ({ postId }) => {
  const {
    mutate: deletePost,
    isLoading: isDeleting,
    isError: isDeletingError,
    error: deleteError,
  } = useDeletePost();
  //   const {
  //     mutate: editPost,
  //     isLoading: isEditing,
  //     isError: isEditingError,
  //     error: editError,
  //   } = useEditPost();

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
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {isDeletingError && (
        <p className="bg-red-500 text-white px-4 py-2 rounded">
          Error: {deleteError?.message}
        </p>
      )}
      {/* <button
        className="bg-blue-500 text-white my-1 p-1 rounded"
        onClick={handleEdit}
        disabled={isEditing}
      >
        {isEditing ? "Editing..." : "Edit"}
      </button>
      {isEditingError && (
        <p className="bg-red-500 text-white px-4 py-2 rounded">
          {editError?.message}
        </p>
      )} */}
    </>
  );
};
