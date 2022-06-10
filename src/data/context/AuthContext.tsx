import Router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'
import Cookies from 'js-cookie'

interface AuthContextProps {
    user?: User | null
    loading?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => void
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

function manageCookie(logged: "yes" | "no"){
    if(logged == "yes"){
        Cookies.set('admin-template-auth', logged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-auth')
    }

}

export function AuthProvider(props: AuthProviderProps){
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    async function configSession(userFirebase : any){
        if(userFirebase?.email) {
            const user = await userNormalize(userFirebase)
            setUser(user)
            manageCookie("yes")
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie('no')
            setLoading(false)
            return false
        }
    }

    async function loginGoogle(){
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            if(resp.user?.email){
                configSession(resp.user)
                Router.push('/')
            }
        } finally {
            setLoading(false)
        }
    }

    async function logout(){
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await configSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(Cookies.get('admin-template-auth') == 'yes'){
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel()
        } else {
            setLoading(false)
        }
    },[])

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
            logout,
            loading
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext