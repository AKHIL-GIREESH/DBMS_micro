import { useState } from "react"
import { Calendar } from "../../src/components/ui/calendar"

const MovieCalender = () => {

    const [date, setDate] = useState<Date | undefined>(new Date())

    console.log(date)
    
    return(
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-black text-white"
        />
    )
}

export default MovieCalender