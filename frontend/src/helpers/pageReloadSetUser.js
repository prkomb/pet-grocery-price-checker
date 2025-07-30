import axios from "axios";

const jwtToken = localStorage.getItem("token");
const pageReloadSetUser = async () => {
  try {
    if (jwtToken) {
      const request = await axios.get("/api/profile", {
        headers: {
          authorization: `Bearer ${jwtToken}`,
        },
      });

      const result = await request.data;
      console.log(result);
      return result;
    } else {
      throw new Error("JWT is not found on LocalStorage");
    }
  } catch (error) {
    console.log(error);
  }
};

export { pageReloadSetUser };
