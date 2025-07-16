import prisma from "./prisma.mjs";

const checkUserExitence = async (userEmail) => {
  return prisma.user.findUnique({ where: { email: userEmail } });
};

export { checkUserExitence };
