import Oops from "../../components/Error/Oops"
import Loading from "../../components/Error/Loading"
import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import {b4Booking} from '../../api/b4Booking'
import { Button } from "@/components/ui/button"
import {booking} from "../../api/booking"
import { useState } from "react"
import { Loader2 } from "lucide-react"

const Booking = () => {

    const {sid} = useParams()

    const [booked,setBooked] = useState(false)
    const [seats,setSeats] = useState(1)

    const {isError,isFetching,data,refetch} = useQuery({
        queryKey:['getSlotMovie','Movies'],
        queryFn: async () => {
            if(sid){
                return await b4Booking(sid)
            }
        }
    })
    let v;
    const userLS = localStorage.getItem('user')
    if(userLS){
        v = JSON.parse(userLS)
    }else{
        return(<>Must be a user</>)
    }

    const {id} = v

    const {mutate:bookingMutate,isLoading} = useMutation({
        mutationFn: async () => {
            if(id){
                console.log("check")
                let bookingStatus = await booking({userId:id,number_of_seats:seats,sid:sid})
                console.log("newUser",bookingStatus)
                if(bookingStatus){
                    setBooked(true)
                    refetch()
                }
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

        const bookingFunc = () => {
            bookingMutate()
        }
        
        return(
            <>
                <h1>{data.movie_name}</h1>
                <p>{data.theatre_name}</p>
                <p>{data.slot_time}</p>
                <Button onClick={() => setSeats(prev => prev+1)}>+</Button>{seats}<Button onClick={() => setSeats(prev => prev-1)}>-</Button>
                <p>Available Seats {data.available_seats}/{data.total_number_of_seats}</p>
                {isLoading?<Button className="bg-gold-gradient text-black font-bold" disabled>Loading
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>:<Button className="bg-gold-gradient text-black font-bold" onClick={bookingFunc} disabled={booked?true:false}>{booked?"BOOKED":"BOOK"}</Button>}
            </>
        )
    }
}

export default Booking