import { SignJWT } from "jose";
import { secretTextEncoder } from "./secretTextEncoder.js";

export const createJWT = async (userData) => {
  const secret = secretTextEncoder();

  const jwt = await new SignJWT(userData)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  return jwt;
};
