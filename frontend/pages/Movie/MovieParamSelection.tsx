import { useParams } from "react-router-dom"
import {MovieCity} from "../../components/Movie/MovieCity"
import MovieCalender from "../../components/Movie/MovieCalender"
  
  export function TheatreSelection() {
    const {id} = useParams()
    return(
        <div className="w-[100vw] border border-red-300 min-h-[100vh]">
            Movie {id}<br/>
            <MovieCity/>
            <div className="w-fit">
                <MovieCalender/>
            </div>
        </div>
        
    )
  }
  

export default TheatreSelection