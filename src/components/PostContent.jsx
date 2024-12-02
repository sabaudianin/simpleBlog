import { PostAction } from "./PostAction";

export const PostContent = ({
  title,
  body,
  user,
  isEditing,
  onBodySwap,
  isSaving,
}) => {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition duration-200">
        {title}
      </h2>
      {!isEditing ? (
        <p className="text-gray-600 mb-4">{body}</p>
      ) : (
        <textarea
          value={body}
          onChange={(e) => onBodySwap(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          disabled={isSaving}
        />
      )}
      <h5 className="text-sm font-medium text-gray-500">
        Author: <span className="text-gray-700">{user}</span>
      </h5>
    </>
  );
};
