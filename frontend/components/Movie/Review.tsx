import ReviewCard from "./ReviewCard"
import Loading from "../Error/Loading"
import Oops from "../Error/Oops"
import { useQuery } from "react-query"
import {getReviewByMovie} from "../../api/getReviewByMovie"

const Review = ({id}:{id:string}) => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getReviews','Movies'],
        queryFn: async () => await getReviewByMovie(id)
    })

    console.log("dataagain",data)

    if(isFetching){
    return(<Loading/>)
    }
    
    if(isError){
    return(<Oops/>)
    }

    //if(data){
    //return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
    //}


    if(data){
        return data.map(({rating,username,review}) => <ReviewCard rating={rating} username={username} review={review}/>)
    }
}

export default Review