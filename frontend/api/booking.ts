export const booking = async (bookingData: any) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/movie/slot/${bookingData.sid}/book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingData)
        })

        const respJSON = await response.json()
        console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}