import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPost } from "../api/postsMethods";
import { PostListItems } from "./PostListItem";

export const PostList = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });

  const posts = data?.pages.flatMap((page) => page.items) || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-6">
      <PostListItems posts={posts} />

      <div className="text-center mt-6">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "No More Posts"}
        </button>
      </div>
    </div>
  );
};
