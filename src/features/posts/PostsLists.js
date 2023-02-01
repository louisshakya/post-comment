import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import React from "react";
import PostCard from "./PostCard";

const PostsLists = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <PostCard key={post.id} props={post} />
      ))}
    </section>
  );
};

export default PostsLists;
