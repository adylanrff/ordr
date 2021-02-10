import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import isEmpty from 'lodash/isEmpty'

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
        const updatedUser = await result.user.updateProfile({
                displayName: username
            }).then(() => setIsAuthenticated(true))
                
        return updatedUser
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

    const value= {
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