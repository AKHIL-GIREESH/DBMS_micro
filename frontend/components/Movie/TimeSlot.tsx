const TimeSlot = ({id,name}:any) => {
    return(
        <div className="bg-gold-gradient w-fit text-black p-2 rounded-md">
            {name} {id}
        </div>
    )
}

export default TimeSlot