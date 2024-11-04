export const b4Booking = async (sid: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/movie/slot/${sid}`, {
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