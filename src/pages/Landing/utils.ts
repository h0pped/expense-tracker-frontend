import { GoogleAuthProvider, signInWithPopup, signOut as signOutFirebase } from "firebase/auth";
import { auth } from "../../utils/firebase";

const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.log(error);
    }
};

export const signOut = async () => {
    try {
        await signOutFirebase(auth)
    } catch (error) {
        console.log(error);
    }
}
