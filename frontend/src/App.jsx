import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "./store/features/login/loginSlice.js";
import { useDispatch } from "react-redux";
import { getUid } from "./store/features/profile/profileSlice.js";
const auth = getAuth();

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        console.log(user);
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(userData));
        dispatch(getUid(user.uid));
      }
    });
  });
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
