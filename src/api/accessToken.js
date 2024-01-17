import { auth } from "../config/firebase"

export const getAccessToken = async () => {
    const user = auth.currentUser

    if (!user) {
        throw new Error("User not authenticated")
    }

    const token = await user.getIdToken()
    return token
}
