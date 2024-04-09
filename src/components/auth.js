import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookie = new Cookies(); 

export const Auth = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            cookie.set("auth-token", result.user.refreshToken);
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <p>Sign in with Google to chat</p>
            <button onClick={signInWithGoogle} >Sign In</button>
        </div>
    );
};