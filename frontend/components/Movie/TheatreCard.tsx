import TimeSlot from "./TimeSlot"

const TheatreCard = () => {
    return(
        <div className="mb-[3vh] border border-light w-[70vw] p-[1.25vw] text-start rounded-md">
            <p className="text-2xl m-0 p-0">
                Theatre Name
            </p>
            <div className="flex w-[100%] pt-[2vh] gap-5">
                <TimeSlot/>
                <TimeSlot/>
                <TimeSlot/>
                <TimeSlot/>
                <TimeSlot/>
            </div>
        </div>
    )
}

export default TheatreCard