import { useParams } from "react-router-dom"
import {MovieCity} from "../../components/Movie/MovieCity"
import MovieCalender from "../../components/Movie/MovieCalender"
  
  export function TheatreSelection() {
    const {id} = useParams()
    return(
        <>
            Theatre {id}
            <MovieCity/>
            <MovieCalender/>
        </>
        
    )
  }
  

export default TheatreSelection