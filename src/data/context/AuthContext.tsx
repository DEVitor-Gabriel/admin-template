import Router from 'next/router'
import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
}

interface AuthProviderProps {
    children?: any
}

const AuthContext = createContext<AuthContextProps>({})

async function userNormalize(userFirebase: firebase.User) : Promise<User>{
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName!,
        email: userFirebase.email!,
        token: token,
        provider: userFirebase.providerData[0]?.providerId!,
        imgUrl: userFirebase.photoURL!
    }
}

export function AuthProvider(props: AuthProviderProps){
    const [user, setUser] = useState<User>()

    async function loginGoogle(){
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        if(resp.user?.email){
            const user = await userNormalize(resp.user)
            setUser(user)
            Router.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext