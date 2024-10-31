import Titanic from "../../src/assets/everyNightInMyDreams.jpg"

const MovieCard = () => {
    return(
        <div className="w-[18vw] h-[45vh] border border-black mb-[1.5vh] rounded-[5px] overflow-hidden">
            <img src={Titanic} className="w-[18vw] h-[40vh] border border-black"/>
            <div className="flex w-[90%] mr-[5%] ml-[5%] h-[5vh] justify-between items-center">
                <p className="text-xl"><b>Titanic</b></p>
                <p>6.9<b>·</b>10</p>
            </div>
        </div>
    )
}

export default MovieCard