import { useParams } from "react-router"
import Titanic from "../../src/assets/everyNightInMyDreams.jpg"
import { Button } from "@/components/ui/button"

const Movie = () => {
    const {id} = useParams()
    return(
        <div className="h-[100vh] w-[100vw]">
            <div className="h-[40vh] w-[100%]  border border-black flex">
                <img src={Titanic} className="h-[100%]"/>
                <div>
                    <h1 className="">MOVIE {id}</h1>
                    <p>6.9<b>·</b>10</p>
                </div>
            </div>
            <Button>Book Tickets</Button>
            <div>
                <h1>
                    TRAILER
                </h1>
            </div>
        </div>
    )
}

export default Movie