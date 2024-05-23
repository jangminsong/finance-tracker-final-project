import { useEffect, useState } from "react";
import Homepage from "./Homepage";
import Sidenav from "./Sidenav";
import Authentication from "./authentication/Authentication";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { loginUser, setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const user = useSelector((state) => state.data.user.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  return (
    <div className="App flex h-screen">
      <div className="flex-grow">
        {user ? <Homepage /> : <Authentication />}
      </div>
    </div>
  );
}

export default App;
