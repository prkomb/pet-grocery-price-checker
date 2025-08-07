import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "./store/features/login/loginSlice.js";
import { useDispatch } from "react-redux";
import { getUid } from "./store/features/profile/profileSlice.js";
import { getProducts } from "./store/features/data/dummyJsonThunk.js";
import { pageReloadSetUser } from "./helpers/pageReloadSetUser.js";
const auth = getAuth();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const user = await pageReloadSetUser();
      dispatch(setUser(user));
    };

    getUser();
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
