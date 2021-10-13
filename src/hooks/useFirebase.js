import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    const signInUsingGoogle = () => {


        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result)

            })


    }

    const logOut = () => {
        signOut(auth).then(() => {

        })
    }
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut

    }


}
export default useFirebase;