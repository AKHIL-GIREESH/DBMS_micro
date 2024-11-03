import { useQuery } from 'react-query';
import { getTop4Movies } from '../../api/getAllMovies';
import MovieCard from './MovieCard';
import Loading from "../Error/Loading"
import Oops from "../Error/Oops"

const Top4 = () => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getAllMovies','Movies'],
        queryFn: async () => await getTop4Movies()
      })
    
      //console.log(data)
    
      if(isFetching){
        return(<Loading/>)
      }
      
      if(isError){
        return(<Oops/>)
      }

      if(data){
        return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
      }

}

export default Top4