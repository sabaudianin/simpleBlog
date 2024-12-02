export const PostAction = ({
  isEditing,
  isSaving,
  onEditToggle,
  onSave,
  onCancel,
  handleDelete,
  isDeleting,
  isDeleteError,
  deleteError,
}) => {
  return (
    <div className="flex gap-2 mt-4">
      <button
        className="bg-red-500 text-white my-1 p-1 rounded"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {isDeleteError && (
        <p className="bg-red-500 text-white px-4 py-2 rounded">
          Error: {deleteError?.message}
        </p>
      )}
      {!isEditing ? (
        <button
          className="bg-blue-500 text-white my-1 p-1 rounded"
          onClick={onEditToggle}
        >
          Edit
        </button>
      ) : (
        <>
          <button
            className="bg-green-500 text-white my-1 p-1 rounded"
            onClick={onSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save"}
          </button>
          <button
            className="bg-gray-500 text-white my-1 p-1 rounded"
            onClick={onCancel}
            disabled={isSaving}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
};
