import { useQuery } from "react-query"
import Loading from "../Error/Loading"
import Oops from "../Error/Oops"

// const Theatre = () => {

//     const {isError,isFetching,data} = useQuery({
//         queryKey:['getReviews','Movies'],
//         queryFn: async () => await getReviewByMovie(id)
//     })

//     console.log("dataagain",data)

//     if(isFetching){
//     return(<Loading/>)
//     }
    
//     if(isError){
//     return(<Oops/>)
//     }

//     //if(data){
//     //return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
//     //}

//     return(
        
//     )
// }

// export default Theatre