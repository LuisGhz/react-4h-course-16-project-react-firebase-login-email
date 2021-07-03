import { useEffect, useState } from "react";
import { auth } from "config/firebase";
import Home from "routes/Home";
import Signin from "routes/Signin";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const us = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        setUser(us);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
      {/* <Home /> */}
      <Signin />
    </div>
  );
}

export default App;
