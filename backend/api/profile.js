import express from "express";
import prisma from "../utils/prisma.mjs";

const router = express.Router();

router.get("/api/profile/:id", async (request, repsonse) => {
  const userId = request.params.id;

  const userProfile = await prisma.profile.findUnique({
    where: {
      userId: +userId,
    },
  });

  return repsonse
    .status(200)
    .send({ message: "Profile page", profile: userProfile });
});

router.patch("/api/profile/:id", async (request, response) => {
  const {
    body: { ...profileBody },
  } = request;

  console.log(profileBody);

  const userId = request.params.id;

  const userProfile = await prisma.profile.findUnique({
    where: {
      userId: +userId,
    },
  });

  const updateUserProfile = await prisma.profile.update({
    where: { userId: +userId },
    data: { ...profileBody },
  });

  return response
    .status(200)
    .send({ message: "User Profile is updated", profile: profileBody });
});

export default router;
