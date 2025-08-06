import express from "express";
import { createJWT } from "./../utils/createNewJwt.js";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import { checkUserExitence } from "./../utils/checkUserExistence.js";

import { userValidator } from "../validators/userValidator.mjs";
import { registerValidator } from "../validators/registerValidators/registerValidator.js";
import { getHashPassword } from "../utils/getHashPassword.js";
import { generateResetToken } from "./../utils/generateResetToken.js";
import sendForgotPasswordEmail from "../utils/sendForgotPasswordEmail.js";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/api/login", userValidator, async (request, response) => {
  const {
    body: { email, password },
  } = request;

  const newJWT = await createJWT({ email, password });

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
    select: {
      name: true,
      surname: true,
      phone: true,
      city: true,
      bio: true,
      postcode: true,
    },
  });

  return response.status(200).json({
    message: "Login successful",
    jwtToken: newJWT,
    user: { getProfile, email: isUserExited.email },
  });
});

router.post("/api/auth", async (request, response) => {
  const {
    body: { email, password },
  } = request;

  const availableUser = await checkUserExitence(email);

  if (availableUser) {
    return response
      .status(409)
      .send({ message: "User with this email is available" });
  }

  const hashedPassword = await getHashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      email: email,
      passwordHash: hashedPassword,
      profile: {
        create: {
          name: "",
          surname: "",
          city: "",
          town: "",
          bio: "",
          phone: "",
          postcode: "",
        },
      },
    },
    include: { profile: true },
  });

  return response
    .status(200)
    .send({ message: "User is created", user: newUser });
});

router.post("/api/forgotPassword", async (request, response) => {
  const {
    body: { email },
  } = request;

  console.log(email);

  const newToken = generateResetToken();

  if (!email) {
    throw new Error("Email is required to find the user");
  }
  const user = await prisma.user.findUnique({
    where: { email },
  });

  await prisma.passwordReset.deleteMany({ where: { userId: user.id } });

  await prisma.passwordReset.create({
    data: {
      userId: user.id,
      tokenHash: newToken.hashToken,
      expiresAt: newToken.expires,
    },
  });

  sendForgotPasswordEmail(newToken.token);

  return response.status(200).send({ message: "User is founded" });
});

router.post("/api/resetPassword", async (request, response) => {
  const {
    data: { password },
  } = request.body;
  const token = request.body.token;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const userRequest = await prisma.passwordReset.findFirst({
    where: { tokenHash: hashedToken },
  });

  const userId = userRequest.userId;

  const currentUser = await prisma.user.findUnique({ where: { id: userId } });

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { id: userId },
    data: {
      passwordHash: hashedPassword,
    },
  });

  return response.status(200).send({ name: "Password is changed" });
});

export default router;
