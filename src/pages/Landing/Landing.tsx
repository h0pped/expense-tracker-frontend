import Button from "../../components/Button/Button";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Landing.scss";
import { googleLogin, signOut } from "./utils";

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <div className="landing">
        <h1 className="title-text">Get control over your expenses</h1>
        {!user && !loading && (
          <div className="sign-in-options">
            <Button width="75" onClick={googleLogin}>
              Sign in with Google
            </Button>
            <Button width="75" disabled>
              Sign in with Facebook
            </Button>
          </div>
        )}
        {user && !loading && (
          <Button width="75" onClick={signOut}>
            Sign out
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
