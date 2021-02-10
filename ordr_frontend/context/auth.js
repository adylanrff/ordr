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

    
    const signUp = (username, email, password) => {
        setIsLoading(true)
        return auth.createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({
                displayName: username
            })
        })
    }

    const login = () => {
    }

    const logout = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setIsLoading(false)
            setCurrentUser(user)
            if (user) {
                setIsAuthenticated(true)
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
        {!isLoading && children}
    </AuthContext.Provider>
}