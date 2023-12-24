import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const prisma = new PrismaClient();

export class DataSource {
  client = prisma;
  async getComments() {
    return await prisma.comment.findMany();
  }
  async getComment({ id }) {
    return await prisma.comment.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
  async getPosts() {
    return await prisma.post.findMany();
  }
  async getPost({ id }) {
    return await prisma.post.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
  async getUsers() {
    return await prisma.user.findMany();
  }
  async getUser({ id }) {
    return await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
  async addUser({ email }) {
    return await prisma.user.create({
      data: {
        id: randomUUID(),
        email,
      },
    });
  }
  async addPost({
    title,
    authorId,
    content = 'Default Content',
  }: {
    title: string;
    authorId: string;
    content?: string;
  }) {
    return await prisma.post.create({
      data: {
        id: randomUUID(),
        title,
        authorId,
        content,
      },
    });
  }
  async addComment({
    postId,
    content,
    userId,
  }: {
    postId: string;
    userId: string;
    content: string;
  }) {
    return await prisma.comment.create({
      data: {
        id: randomUUID(),
        postId,
        content,
        userId,
      },
    });
  }
}
