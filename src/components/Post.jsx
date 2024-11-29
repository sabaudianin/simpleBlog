export const Post = ({ post }) => {
  return (
    <div
      key={post.id}
      className="bg-white shadow-lg rounded-lg p-6 mb-4 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition duration-200">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <h5 className="text-sm font-medium text-gray-500">
        Author: <span className="text-gray-700">{post.user}</span>
      </h5>
    </div>
  );
};
