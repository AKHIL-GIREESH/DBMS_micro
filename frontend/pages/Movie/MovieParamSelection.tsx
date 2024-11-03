import { useParams } from "react-router-dom"
import {MovieCity} from "../../components/Movie/MovieCity"
import MovieCalender from "../../components/Movie/MovieCalender"
import { useState } from "react"
import Theatre from "../../components/Movie/Theatre"
  
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
        <div className="bg-light text-white flex flex-col items-center text-center w-[100vw] min-h-[100vh]">
            <h1 className="pt-[5vh] font-extrabold text-my-gold">MOVIE {id}</h1><br/>
            <MovieCity value={city} modifyCity={modifyCity}/>
            <div className="w-fit pt-[3vh] pb-[3vh]">
                <MovieCalender modifyDate={modifyDate} date={date}/>
            </div>
            <h1 className="font-extrabold text-my-gold">THEATRES</h1>
            {city === ""?<p>Choose city to see all the theatres available</p>:
            <div className="pt-[5vh]">
                {id && <Theatre id={id} dat={{location:city,date:date.toISOString().split('T')[0]}}/>}
            </div>}
            
        </div>
        
    )
  }
  

export default TheatreSelection