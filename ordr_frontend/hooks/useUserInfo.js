import { useEffect, useState } from "react"
import { useAuth } from "../context/auth"
import { getUser } from "../lib/supabase"

export const useUserInfo = () => {
    const [ userData, setUserData ] = useState({}) 
    const [ userError, setUserError ] = useState({}) 
    const { currentUser } = useAuth()

    useEffect(async () => {
        const { data, error } = await getUser(currentUser.uid)
        setUserData(data)
        setUserError(error)
        console.log(data)
    }, [currentUser])

    return [userData, userError]
}
