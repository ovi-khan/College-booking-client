import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../../firebase/firebase.config"
import { createContext, useEffect, useState } from "react"


export const AuthContext = createContext(null)
const auth = getAuth(app)




const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('currentUser', currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    } ,[])

    // create user
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google Sign up
    const googleSignUp = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // Log Out
    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }


    const authInfo = {
        user, 
        loading, 
        createUser,
        signIn,
        googleSignUp,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;