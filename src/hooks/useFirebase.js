import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    // console.log(user);
    const handleGoogleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
       
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        })
    }, []);


    return {
        handleGoogleSignIn,
        handleGoogleSignOut,
        user
    }
}

export default useFirebase;