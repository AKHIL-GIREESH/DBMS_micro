export const createScreen = async (theatre: string, screenData: any) => {
    try {
        console.log(screenData)
        console.log(theatre)
        console.log(JSON.stringify(screenData))
        const response = await fetch(`http://localhost:3000/api/v1/mgr/${theatre}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(screenData)
        })

        const respJSON = await response.json()
        //console.log(respJSON)
        return respJSON
    } catch (e) {
        throw new Error("Something went wrong: " + e)
    }
}