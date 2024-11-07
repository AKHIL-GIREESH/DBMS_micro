export const removeScreen = async (id: string, tid: string) => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/mgr/${tid}/${id}`, {
            method: "DELETE",
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