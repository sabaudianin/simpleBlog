import { Post } from "./Post";

export const PostListItems = ({ posts }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
};
