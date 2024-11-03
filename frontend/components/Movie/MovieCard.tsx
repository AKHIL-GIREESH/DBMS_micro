import Titanic from "../../src/assets/everyNightInMyDreams.jpg"
import { MovieDetails } from "Types/Movie"

const MovieCard = ({name,poster,rating,id}:MovieDetails) => {
    return(
        <div className="w-[18vw] h-[45vh] border border-black mb-[1.5vh] rounded-[5px] overflow-hidden bg-black">
            <img src={poster} className="w-[18vw] h-[40vh] border border-black"/>
            <div className=" flex w-[90%] mr-[5%] ml-[5%] h-[5vh] justify-between items-center">
                <p className="text-xl"><b>{name}</b></p>
                <p>{rating[0]}<b>·</b>10</p>
            </div>
        </div>
    )
}

export default MovieCard