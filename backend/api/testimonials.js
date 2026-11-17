import express from "express";
import prisma from "../utils/prisma.mjs";

const router = express.Router();

// Only approved testimonials are public.
router.get("/api/testimonials", async (request, response) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        location: true,
        quote: true,
        rating: true,
      },
    });
    return response.status(200).send({ testimonials });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return response.status(500).json({ message: "Failed to fetch testimonials" });
  }
});

// Guests allowed. Saved unapproved; set approved = true in the DB to publish.
router.post("/api/testimonials", async (request, response) => {
  const name = String(request.body?.name ?? "").trim();
  const location = String(request.body?.location ?? "").trim();
  const quote = String(request.body?.quote ?? "").trim();
  const rating = Number(request.body?.rating);

  if (name.length < 2 || name.length > 50) {
    return response.status(400).json({ message: "Name must be 2-50 characters" });
  }
  if (location.length > 60) {
    return response.status(400).json({ message: "Location is too long" });
  }
  if (quote.length < 10 || quote.length > 300) {
    return response.status(400).json({ message: "Review must be 10-300 characters" });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return response.status(400).json({ message: "Rating must be 1-5" });
  }

  try {
    await prisma.testimonial.create({
      data: { name, location, quote, rating },
    });
    return response
      .status(201)
      .send({ message: "Thanks! Your review will appear after approval." });
  } catch (error) {
    console.error("Error saving testimonial:", error);
    return response.status(500).json({ message: "Failed to save review" });
  }
});

export default router;
