import crypto from "crypto";

const generateResetToken = () => {
  const token = crypto.randomBytes(32).toString("hex");
  const hashToken = crypto.createHash("sha256").update(token).digest("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 15);
  return { token, expires, hashToken };
};

export { generateResetToken };
