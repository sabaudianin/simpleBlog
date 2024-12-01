import { useState } from "react";
import { PostAction } from "./PostAction";

export const Post = ({ post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState(post.body);

  const { action: editPost, isLoading: isSaving } = useEditPost();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    editPost({ id: post.id, updatedPost: { ...post, body: editedBody } });
    setIsEditing(false);
  };

  return (
    <section className="bg-blue-100 shadow-lg rounded-lg p-6 mb-4 border border-gray-200 hover:bg-blue-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition duration-200">
        {post.title}
      </h2>
      {!isEditing ? (
        <p className="text-gray-600 mb-4">{post.body}</p>
      ) : (
        <textarea
          value={editedBody}
          onChange={(e) => setEditedBody(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          disabled={isSaving}
        />
      )}
      <h5 className="text-sm font-medium text-gray-500">
        Author: <span className="text-gray-700">{post.user}</span>
      </h5>
      <div className="flex gap-2 mt-4">
        <button
          onClick={isEditing ? handleSave : handleEditToggle}
          className={`p-2 rounded ${
            isEditing ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
          disabled={isSaving}
        >
          {isEditing ? (isSaving ? "Saving..." : "Save") : "Edit"}
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setIsEditing(false);
              setEditedBody(post.body);
            }}
            className="p-2 bg-gray-500 text-white rounded"
            disabled={isSaving}
          >
            Cancel
          </button>
        )}
      </div>
      <PostAction postId={post.id} />
    </section>
  );
};
