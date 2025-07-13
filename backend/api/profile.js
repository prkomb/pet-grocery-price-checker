import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

router.post("/api/profile", (request, response) => {
  const { email } = request.body;
});

export default router;
