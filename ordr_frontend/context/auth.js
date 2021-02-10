import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import isEmpty from 'lodash/isEmpty'
import { insertUser } from '../lib/supabase'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const signUp = async (username, email, password) => {
        const result = await auth.createUserWithEmailAndPassword(email, password)
        await result.user.updateProfile({
            displayName: username
        })
        const { data } = await insertUser(result.user.uid, result.user.email, result.user.displayName).then(() => setIsAuthenticated(true))
        console.log(data)
        return data
    }

    const login = async (email, password) => {
        return await auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setIsLoading(false)
            if (user) {
                setCurrentUser({
                    ...user,
                    username: user.displayName
                })
                if (user.displayName && user.displayName !== '') {
                    setIsAuthenticated(true)
                }
            }
        })

        return unsubscriber
    }, [])

    const value = {
        currentUser,
        isLoading,
        isAuthenticated,
        signUp,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}