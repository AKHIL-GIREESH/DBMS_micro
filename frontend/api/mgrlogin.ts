import { UserLoginType } from "../Types/user"

export const mgrLoginCall = async (loginData: any) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/auth/mgr/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })

        const respJSON = await response.json()
        console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}