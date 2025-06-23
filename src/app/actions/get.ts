"use server";

import prisma from "../lib/prisma";

export async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  
  return posts;
}

export async function getUser() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  
  return users;
}


