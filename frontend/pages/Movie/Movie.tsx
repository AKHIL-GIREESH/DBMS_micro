import { useParams } from "react-router"
import { Button } from "@/components/ui/button"
import YouTube from "react-youtube"
import getYouTubeID from "get-youtube-id"
import { Link } from "react-router-dom"
import { Ticket } from "lucide-react"
import { useQuery } from "react-query"
import {getOneMovie} from "../../api/getOneMovie"
import Loading from "../../components/Error/Loading"
import Oops from "../../components/Error/Oops"
import Review from "../../components/Movie/Review"


const Movie = () => {
    const {id} = useParams()
    const opts = {
        height:"400",
        width:"708",
        playerVars:{
            autoplay:0
        }
    }

    const {isError,isFetching,data} = useQuery({
        queryKey:['getOneMovie','Movies'],
        queryFn: async () => {
            if(id){
                return await getOneMovie(id)
            }
      }
    })
    
    console.log("data",data)
    
    if(isFetching){
    return(<div className="bg-light w-[100vw] h-[100vh] text-white text-center">
        <Loading/>
    </div>
    )
    }
      
    if(isError){
    return(<Oops/>)
    }

    if(data){
        const {desc,img,name,rating,trailer} = data[0]
        //return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
        return(
            <div className="bg-light text-white">
                <div className=" text-center ml-12 mr-12 pt-[5vh]">
                    <div className="h-[50vh] w-[100%] ml-6  flex">
                        <img src={img} className="h-[100%]"/>
                        <div className="mt-[5vh] w-[25%] ml-10 flex flex-col items-start justify-start">
                            <h1 className="font-extrabold">{name}</h1><br/>
                            <div className="pl-4 pr-4 p-2 bg-black text-lg rounded-sm w-[100%] flex items-center justify-between">
                            <p><b>⭐️&ensp;{rating[0]}•10</b></p>
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
                            videoId={getYouTubeID(trailer)}
                            opts={opts}
                        />
                        <br/>
                        <br/>
                        <p className="font-medium w-[90%] pb-[5vh]">{desc}</p>
                    </div>
                    <br/>
                    <div>
                        <h1 className="font-extrabold text-my-gold pb-[5vh] pt-[5vh]">
                            REVIEWS
                        </h1>
                        <div className="flex justify-between">
                            {id && <Review id={id}/>}
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie