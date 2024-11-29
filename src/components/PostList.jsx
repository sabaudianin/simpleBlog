import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { PostListItems } from "./PostListItem";
import { fetchPost } from "../api/postsMethods";

export const PostList = () => {
  const { isError, isPending, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPost,
  });
  const memoizedPosts = useMemo(() => <PostListItems posts={data} />, [data]);

  if (isPending) return <p>...LOADING...</p>;
  if (isError) return <p>ERROR! {error.message}</p>;

  return <section className="container mx-auto p-6">{memoizedPosts}</section>;
};
