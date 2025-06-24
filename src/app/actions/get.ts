"use server";

import prisma from "../lib/prisma";

export async function getPosts() {
  const posts = await prisma.post.findMany();
  
  return posts;
}



export async function getUser() {
  const users = await prisma.user.findMany();
  
  return users;
}


