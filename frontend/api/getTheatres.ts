export const getTheatres = async (id: string, data: any) => {
    try {
        console.log(data.date)
        const response = await fetch(`http://localhost:3000/api/v1/movie/${id}/theatres`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const respJSON = await response.json()
        //console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}