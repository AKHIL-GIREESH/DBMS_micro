import { Review } from "../Types/Movie"

export const getReviewByMovie = async (id: string): Promise<Review[]> => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/movie/${id}/review`, {
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