import { useQuery } from "react-query"
import Loading from "../Error/Loading"
import Oops from "../Error/Oops"
import { getTheatres } from "../../api/getTheatres"
import TheatreCard from "./TheatreCard"

const Theatre = ({id,dat}:{id:string,dat:any}) => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getTheatres','Movies'],
        queryFn: async () => await getTheatres(id,dat)
    })

    console.log("thre",data)

    if(isFetching){
    return(<Loading/>)
    }
    
    if(isError){
    return(<Oops/>)
    }

    if (data) {
        return Object.values(data).map((value: any) => (
            <TheatreCard key={value[0]} name={value[1]} slots={value.slice(2)} />
        ));
    }
}

export default Theatre