import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from '../firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [auth])


    const signInWithGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }



    const sendUserInfoToDb = (email) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };



    const createAccountWithGoogle = (email, password) => {
        sendUserInfoToDb(email)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginWithEmailAndPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            const newUser = { ...user, displayName: name }
            setUser(newUser)

            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const logOut = () => {
        console.log("logouttttt");
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }



    // get admin user 


    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);;


    return {
        user,
        setUser,
        signInWithGoogle,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        isLoading,
        setIsLoading,
        logOut,
        updateName,
        sendUserInfoToDb,
        isAdmin,
    }
}

export default useFirebase;
