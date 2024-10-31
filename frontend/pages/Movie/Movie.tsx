import { useParams } from "react-router"
import Titanic from "../../src/assets/everyNightInMyDreams.jpg"
import { Button } from "@/components/ui/button"
import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"


const Movie = () => {
    const {id} = useParams()
    const opts = {
        height:"315",
        width:"560",
        playerVars:{
            autoplay:0
        }
    }
    return(
        <div className=" text-center ml-12 mr-12">
            <div className="h-[50vh] w-[100%] ml-6 border border-black flex">
                <img src={Titanic} className="h-[100%]"/>
                <div className="mt-[5vh] w-[25%] ml-10 flex flex-col items-start justify-start">
                    <h1 className="font-extrabold">MOVIE {id}</h1><br/>
                    <div className="pl-4 pr-4 p-2 bg-red-500 text-lg rounded-sm w-[100%] flex items-center justify-between">
                    <p><b>⭐️&ensp;6•10</b></p>
                    <Button>RATE</Button>
                    </div>
                    <br/><br/>
                    <br/><Button>Book Tickets</Button>
                </div>
            </div>
            <br/>
            <div className="flex flex-col items-center justify-center border border-black">
                <h1 className="font-extrabold">
                    TRAILER
                </h1>
                <br/>
                
                {/* <iframe
                width="560"
                height="315"
                src={`ckiaNqOrG5U`}
                allowFullScreen
                title="YouTube video"
                ></iframe> */}
                <YouTube
                    videoId={getYouTubeID("https://www.youtube.com/watch?v=kVrqfYjkTdQ&pp=ygUPdGl0YW5pYyB0cmFpbGVy")}
                    opts={opts}
                />
                <br/>
                <br/>
                <p className="font-medium">Lorem ipsum dolor sit amet. In nulla dolorem quo beatae quasi in rerum sapiente hic eligendi facilis qui amet ipsam et molestiae distinctio! Eum quia assumenda qui numquam debitis sed perferendis quas quo expedita consequatur eos quia asperiores.

Eum veniam natus et ipsum officiis vel accusamus tenetur eum odio delectus? Aut repellendus quia et officia voluptatem est eveniet laborum. Et dolore possimus qui officiis Quis aut omnis facilis aut cumque tempore aut quam architecto et eaque blanditiis hic dolores vitae.</p>
            </div>
            <br/>
            <div>
                <h1 className="font-extrabold">
                    REVIEWS
                </h1>
                <br/>
            </div>
        </div>
    )
}

export default Movie