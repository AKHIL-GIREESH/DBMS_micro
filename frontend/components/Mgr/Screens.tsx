import { Button } from "@/components/ui/button"
import { Trash2, Loader2} from "lucide-react"

const Screens = ({nums,id,tid,name,loadingState,deleteFunc}:any) => {

    return(
        <div className="w-[30vw] p-[3vh] bg-white rounded-md mb-[3vh] flex flex-col justify-center items-center">
            <p><span className="font-light">Name</span> : <b>{name}</b></p>
            <br/>
            <p><span className="font-light">Seats</span> : <b>{nums}</b></p>
            <br/>
            {loadingState?<Button className="hover:text-white" disabled>Loading<Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>:<Button onClick={() => {
                console.log(id,tid)
                deleteFunc({id,tid})
            }}><Trash2/></Button>}
            
            {/* <p><span className="font-light">Name</span> : <b>{name}</b></p> */}
        </div>
    )
}

export default Screens 