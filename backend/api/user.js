import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

import { userValidator } from "../validators/userValidator.mjs";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/api/login", userValidator, async (request, response) => {
  const {
    body: { email, password },
  } = request;

  const isUserExited = await prisma.user.findUnique({
    where: { email },
  });

  if (!isUserExited) {
    return response
      .status(409)
      .send({ message: "Can't find user with this email" });
  }

  const isPassword = await bcrypt.compare(password, isUserExited.passwordHash);

  if (!isPassword) {
    return response.status(401).json({ message: "Invalid email or password" });
  }

  const getProfile = await prisma.profile.findUnique({
    where: { userId: isUserExited.id },
  });

  return response.status(200).json({
    message: "Login successful",
    user: {
      email,
      ...getProfile,
    },
  });
});

router.post("/api/auth", async (request, response) => {});

export default router;
