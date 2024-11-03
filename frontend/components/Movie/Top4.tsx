import { useQuery } from 'react-query';
import { getTop4Movies } from '../../api/getAllMovies';
import MovieCard from './MovieCard';

const Top4 = () => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getAllMovies','Movies'],
        queryFn: async () => await getTop4Movies()
      })
    
      //console.log(data)
    
      if(isFetching){
        return(<>Loading...</>)
      }

      if(data){
        return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
      }

}

export default Top4