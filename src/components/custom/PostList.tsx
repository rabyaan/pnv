'use client' // 👈 this makes it a client component

import React from 'react'
import { deleteUser } from '../../app/actions/post'

export default function PostList({ posts, refreshPosts }: { posts: any[], refreshPosts: () => void }) {

  const handleDelete = async (_id: number) => {
    await deleteUser(_id)
    refreshPosts();
  }

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}
