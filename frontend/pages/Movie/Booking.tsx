import Oops from "../../components/Error/Oops"
import Loading from "../../components/Error/Loading"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import {b4Booking} from '../../api/b4Booking'
import { Button } from "@/components/ui/button"

const Booking = () => {

    const {sid} = useParams()

    const {isError,isFetching,data} = useQuery({
        queryKey:['getTheatres','Movies'],
        queryFn: async () => {
            if(sid){
                return await b4Booking(sid)
            }
        }
    })

    console.log("thre",data)

    if(isFetching){
        return(<Loading/>)
    }
    
    if(isError){
        return(<Oops/>)
    }

    if(data){
        return(
            <>
                <h1>{data.movie_name}</h1>
                <p>{data.theatre_name}</p>
                <p>{data.slot_time}</p>
                <p>Available Seats {data.available_seats}/{data.total_number_of_seats}</p>
                <Button>Book</Button>
            </>
        )
    }
}

export default Booking