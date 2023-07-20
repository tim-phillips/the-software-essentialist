import { PrismaClient, Prisma } from "@prisma/client";

export const prisma = new PrismaClient();

export type UserCreateInput = Prisma.UserCreateInput;

export function createUser(user: UserCreateInput) {
  return prisma.user.create({ data: user });
}
