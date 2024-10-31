import { useState } from "react"
import { Calendar } from "../../src/components/ui/calendar"

const MovieCalender = () => {

    const [date, setDate] = useState<Date | undefined>(new Date())
    
    return(
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        />
    )
}

export default MovieCalender