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

router.post("/api/profile/:id", (request, response) => {});

export default router;
