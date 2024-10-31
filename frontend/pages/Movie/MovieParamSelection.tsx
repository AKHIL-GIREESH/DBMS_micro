import { useParams } from "react-router-dom"
import {MovieCity} from "../../components/Movie/MovieCity"
import MovieCalender from "../../components/Movie/MovieCalender"
import { useState } from "react"
  
  export function TheatreSelection() {
    const {id} = useParams()
    const [city, setCity] = useState<string>("")
    const [date, setDate] = useState<Date>(new Date());
    
    const modifyDate = (newDate: Date) => {
        setDate(newDate);
    };

    const modifyCity = (val:string) => {
        setCity(val)
    }

    return(
        <div className="w-[100vw] border border-red-300 min-h-[100vh]">
            Movie {id}<br/>
            <MovieCity value={city} modifyCity={modifyCity}/>
            <div className="w-fit">
                <MovieCalender modifyDate={modifyDate} date={date}/>
            </div>
        </div>
        
    )
  }
  

export default TheatreSelection