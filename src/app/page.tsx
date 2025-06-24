// "use client";
import { useEffect, useState } from "react";
import PostList from '@/components/custom/PostList'
import PostForm from '@/components/custom/PostForm'
import { getUser } from "./actions/get";

export default async function Home() {

  // Fetch posts from API


  const u = await getUser();

  // Pass fetchPosts to children so they can refresh after create/delete
  return (
    <div>
      {u.map(u => (
        <div key={u.id}>
          <h2>{u.name}</h2>
          <p>{u.email}</p>
        </div>
      ))}

      <PostForm />
    </div>
  );
}
