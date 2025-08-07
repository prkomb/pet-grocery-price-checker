import bcrypt from "bcrypt";

async function getHashPassword(password) {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
}

export { getHashPassword };
