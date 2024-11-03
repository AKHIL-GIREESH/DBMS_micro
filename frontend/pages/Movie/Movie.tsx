import { useParams } from "react-router"
import Titanic from "../../src/assets/everyNightInMyDreams.jpg"
import { Button } from "@/components/ui/button"
import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"
import { Link } from "react-router-dom"
import { Ticket } from "lucide-react"


const Movie = () => {
    const {id} = useParams()
    const opts = {
        height:"400",
        width:"708",
        playerVars:{
            autoplay:0
        }
    }
    return(
        <div className="bg-light text-white">
            <div className=" text-center ml-12 mr-12 pt-[5vh]">
                <div className="h-[50vh] w-[100%] ml-6  flex">
                    <img src={Titanic} className="h-[100%]"/>
                    <div className="mt-[5vh] w-[25%] ml-10 flex flex-col items-start justify-start">
                        <h1 className="font-extrabold">MOVIE {id}</h1><br/>
                        <div className="pl-4 pr-4 p-2 bg-black text-lg rounded-sm w-[100%] flex items-center justify-between">
                        <p><b>⭐️&ensp;6•10</b></p>
                        <Button className="bg-gold-gradient text-black font-bold border border-none">RATE</Button>
                        </div>
                        <br/><br/>
                        <br/><Link to="theatre"><Button className="bg-gold-gradient text-black font-bold border border-none">BOOK TICKETS <Ticket/></Button></Link>
                    </div>
                </div>
                <br/>
                <div className="flex flex-col items-center justify-center bg-gold-gradient2 pt-[5vh] mt-[3vh] rounded-lg text-black">
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
                    <p className="font-medium w-[90%] pb-[5vh]">Lorem ipsum dolor sit amet. In nulla dolorem quo beatae quasi in rerum sapiente hic eligendi facilis qui amet ipsam et molestiae distinctio! Eum quia assumenda qui numquam debitis sed perferendis quas quo expedita consequatur eos quia asperiores.

    Eum veniam natus et ipsum officiis vel accusamus tenetur eum odio delectus? Aut repellendus quia et officia voluptatem est eveniet laborum. Et dolore possimus qui officiis Quis aut omnis facilis aut cumque tempore aut quam architecto et eaque blanditiis hic dolores vitae.</p>
                </div>
                <br/>
                <div>
                    <h1 className="font-extrabold text-my-gold pb-[5vh] pt-[5vh]">
                        REVIEWS
                    </h1>
                    <div className="flex justify-between">
                        <div className="bg-black text-white border border-light p-4 rounded-md text-start w-[48%]">
                            <p className="font-semibold text-xl">User</p>
                            <p className="font-light">Lorem ipsum dolor sit amet. In nulla dolorem quo beatae quasi in rerum sapiente hic eligendi facilis qui amet ipsam et molestiae distinctio! Eum quia assumenda qui numquam debitis sed perferendis quas quo expedita consequatur eos quia asperiores.</p>
                        </div>
                        {/* bg-gold-gradient text-black */}
                        <div className="bg-black text-white border border-light p-4 rounded-md text-start w-[48%]">
                            <p className="font-semibold text-xl">User</p>
                            <p className="font-light">Lorem ipsum dolor sit amet. In nulla dolorem quo beatae quasi in rerum sapiente hic eligendi facilis qui amet ipsam et molestiae distinctio! Eum quia assumenda qui numquam debitis sed perferendis quas quo expedita consequatur eos quia asperiores.</p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Movie