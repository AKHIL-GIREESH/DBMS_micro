import { useParams } from "react-router-dom"

const TheatreSelection = () => {
    const {id} = useParams()
    return(
        <>
            Theatre {id}
        </>
    )
}

export default TheatreSelection