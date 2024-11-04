import { Link } from "react-router-dom"

const TimeSlot = ({id,name}:any) => {
    return(
        <div className="bg-gold-gradient w-fit text-black p-2 rounded-md">
            <Link className="text-white" to={`${id}`}>
                {name}
            </Link>
        </div>
    )
}

export default TimeSlot