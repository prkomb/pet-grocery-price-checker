import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import { useEffect } from "react";
import { setUser } from "./store/features/login/loginSlice.js";
import { useDispatch } from "react-redux";
import { pageReloadSetUser } from "./helpers/pageReloadSetUser.js";
import { getProducts } from "./store/features/products/productsThunk.js";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const user = await pageReloadSetUser();
      dispatch(setUser(user));
    };

    getUser();
    dispatch(getProducts());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
