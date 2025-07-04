"use server";

import prisma from "../lib/prisma";
import { User, Post } from "@/app/generated/prisma";

export async function createPost(data: User) {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
    },
  });
}

export async function deleteUser(_id: number) {
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: _id,
      },
    });
    return deletePost;
  } catch (error: any) {
    if (error.code === 'P2025') {
      return { error: 'Post not found' };
    }
    throw error;
  }
}
