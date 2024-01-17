import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"

const Profile = () => {
    const [user, loading] = useAuthState(auth)
    const [profile, setProfile] = useState("")
    const getProfile = async () => {
        const token = await user.getIdToken()
        const res = await fetch("http://localhost:5001/api/v1/profile/", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
        const data = await res.json()
        setProfile(token)
    }
    useEffect(() => {
        getProfile()
    }, [user])
    return <div>{profile}</div>
}

export default Profile
