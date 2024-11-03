import { useQuery } from 'react-query';
import { getNotTop4Movies } from '../../api/getNotTop4Movies';
import MovieCard from './MovieCard';
import Loading from "../Error/Loading"
import Oops from "../Error/Oops"

const NotTop4 = () => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getNotTop4Movies','Movies'],
        queryFn: async () => await getNotTop4Movies()
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

export default NotTop4