import express from "express";
import prisma from "../utils/prisma.mjs";
import { isCityInCountryMiddleware } from "../validators/profileValidators/isCityInCountry.js";
import { getJWTheader } from "./../utils/getJWTheader.js";
import { secretTextEncoder } from "./../utils/secretTextEncoder.js";
import { jwtVerify } from "jose";

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

router.patch(
  "/api/profile/:id",
  isCityInCountryMiddleware,
  async (request, response) => {
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
      .send({ message: "User Profile is updated", profileData: profileBody });
  }
);

router.patch("/api/profile", async (request, response) => {
  const { body } = request;
  console.log(body);

  const jwtToken = getJWTheader(request.headers.authorization);

  const secret = secretTextEncoder();
  const {
    payload: { email },
  } = await jwtVerify(jwtToken, secret);

  const user = await prisma.user.findUnique({ where: { email: email } });

  const profileUpdate = await prisma.profile.update({
    where: { userId: user.id },
    data: { ...body },
  });
});

router.get("/api/profile", async (request, response) => {
  const authToken = getJWTheader(request.headers.authorization);

  const secret = secretTextEncoder();

  const {
    payload: { email },
  } = await jwtVerify(authToken, secret);
  console.log(email);

  const user = await prisma.user.findUnique({ where: { email: email } });
  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
    include: { user: { select: { email: true } } },
  });

  return response.status(200).send({ message: "User profile", profile, email });
});

export default router;
