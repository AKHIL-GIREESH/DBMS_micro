import { useQuery } from 'react-query';
import { getNotTop4Movies } from '../../api/getNotTop4Movies';
import MovieCard from './MovieCard';

const NotTop4 = () => {

    const {isError,isFetching,data} = useQuery({
        queryKey:['getNotTop4Movies','Movies'],
        queryFn: async () => await getNotTop4Movies()
      })
    
      //console.log(data)
    
      if(isFetching){
        return(<>Loading...</>)
      }

      if(data){
        return data.map(({name,poster,rating,id}) => <MovieCard id={id} name={name} poster={poster} rating={rating}/>)
      }

}

export default NotTop4