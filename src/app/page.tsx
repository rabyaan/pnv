"use client";
import { useEffect, useState } from "react";
import PostList from '@/components/custom/PostList'
import PostForm from '@/components/custom/PostForm'

export default function Home() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from API
  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Pass fetchPosts to children so they can refresh after create/delete
  return (
    <div>
      <PostList posts={posts} refreshPosts={fetchPosts} />
      <div>
        <h3>Create Post</h3>
        <PostForm refreshPosts={fetchPosts} />
      </div>
    </div>
  );
}
