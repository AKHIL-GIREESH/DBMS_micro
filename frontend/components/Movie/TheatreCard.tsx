import TimeSlot from "./TimeSlot"

const TheatreCard = ({name,slots}:any) => {
    console.log(name)
    return(
        <div className="mb-[3vh] border border-light w-[70vw] p-[1.25vw] text-start rounded-md">
            <p className="text-2xl m-0 p-0">
                {name}
            </p>
            <div className="flex w-[100%] pt-[2vh] gap-5">
                {slots.map((item:any) => <TimeSlot id={item[0]} name={item[1]}/>)}
            </div>
        </div>
    )
}

export default TheatreCard