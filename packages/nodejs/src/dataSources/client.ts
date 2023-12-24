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
  async updateUser({ id, email }: { id: string; email: string }) {
    return await prisma.user.update({
      where: { id },
      data: { email },
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
        content: 'Default Content',
      },
    });
  }
  async updatePost({ id, title }: { id: string; title: string }) {
    return await prisma.post.update({
      where: { id },
      data: { title },
    });
  }
  async deletePost({ id }: { id: string }) {
    const commentIds = (await prisma.comment.findMany())
      .map((com) => com.id)
      .filter((res) => res === id);
    if (commentIds.length > 0) {
      for await (let comment of commentIds) {
        await prisma.comment.deleteMany({
          where: { id: comment },
        });
      }

      await prisma.comment.deleteMany({
        where: { id },
      });
    }

    await prisma.post.delete({
      where: { id },
    });

    return await prisma.post.findMany();
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
  async updateComment({ id, content }: { id: string; content: string }) {
    return await prisma.comment.update({
      where: { id },
      data: { content },
    });
  }
  async deleteComment({ id }: { id: string }) {
    await prisma.comment.delete({
      where: { id },
    });

    return await prisma.comment.findMany();
  }
}
