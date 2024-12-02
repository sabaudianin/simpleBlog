import { useState } from "react";
import { PostAction } from "./PostAction";
import { PostContent } from "./PostContent";
import { useEditPost } from "../hooks/useEditPost";
import { useDeletePost } from "../hooks/useDeletePost";

export const Post = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(post.body);

  const { editPost, isSaving, isEditError, editError } = useEditPost();

  const { deletePost, isDeleting, isDeleteError, deleteError } =
    useDeletePost();

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = () => {
    editPost({ id: post.id, updatedPost: { ...post, body: editedBody } });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedBody(post.body);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <section className="bg-blue-100 shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:bg-blue-300">
      <PostContent
        title={post.title}
        body={editedBody}
        user={post.user}
        isEditing={isEditing}
        onBodySwap={setEditedBody}
        isSaving={isSaving}
      />
      <PostAction
        isEditing={isEditing}
        isSaving={isSaving}
        onEditToggle={toggleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
        handleDelete={handleDelete}
        isDeleting={isDeleting}
        isDeleteError={isDeleteError}
        deleteError={deleteError}
      />
    </section>
  );
};
