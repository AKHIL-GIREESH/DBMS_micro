import { MovieDetails } from "../Types/Movie"

export const getNotTop4Movies = async (): Promise<MovieDetails[]> => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/gen/others`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const respJSON = await response.json()
        console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}