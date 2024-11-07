import { ArrowBigLeft, ArrowRightIcon } from "lucide-react"
import { useMutation } from "react-query"

const Screens = ({nums,id,name}:any) => {

    // const {mutate:bookingMutate,isLoading} = useMutation({
    //     mutationFn: async () => {
    //         if(id){
    //             console.log("check")
    //             let bookingStatus = await booking({screen_name:name,theatre_id:id,number_of_seats:nums})
    //             console.log("newUser",bookingStatus)
    //             if(bookingStatus){
    //                 setBooked(true)
    //             }
    //         }
    //     }
    // })

    
    return(<div className="w-[30vw] p-[3vh] bg-white rounded-md mb-[3vh] flex flex-col justify-center items-center">
        <p><span className="font-light">Name</span> : <b>{name}</b></p>
        <br/>
        <p><span className="font-light">Seats</span> : <b>{nums}</b></p>
        <br/>
        <ArrowRightIcon/>
        {/* <p><span className="font-light">Name</span> : <b>{name}</b></p> */}
    </div>)
}

export default Screens