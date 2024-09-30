import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("[DATABASE] connected 🫡");
  } catch (error) {
    console.error("[DATABASE] connection error 😰", error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
  console.log("[DATABASE] disconnected 🤫");
};

export { prisma, connectDB, disconnectDB };
