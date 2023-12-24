import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'crypto';

export const prisma = new PrismaClient();

export class DataSource {
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
  async getPosts() {
    return await prisma.post.findMany();
  }
  async addPost({ title, authorId }) {
    return await prisma.post.create({
      data: {
        id: randomUUID(),
        title,
        authorId,
      },
    });
  }
  async getPost({ id }) {
    return await prisma.post.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
}
