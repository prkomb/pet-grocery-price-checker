import { doc, getDoc, getFirestore } from "firebase/firestore";
import ServerError from "../../errors/ServerError";

export const getUserByData = async (uid) => {
  try {
    const db = getFirestore();
    const userRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userRef);
    return userDocSnap.data();
  } catch (error) {
    throw new ServerError(error.message);
  }
};
