import { MovieDetails } from "../Types/Movie"

export const getTop4Movies = async (): Promise<MovieDetails[]> => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/gen/t4`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const respJSON = await response.json()
        //console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}