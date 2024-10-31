import './App.css'
import MovieCard from "../components/Movie/MovieCard"

function App() {
  //const [count, setCount] = useState(0)
  const movieCards = [];
  
  for (let i = 0; i < 10; i++) {
      movieCards.push(<MovieCard key={i} />);
  }

  return (
    <div>
      Book Your Show
      <div className='ml-[3vw] flex flex-wrap w-[94vw] m-0 justify-evenly'>
        {movieCards}
      </div>
    </div>
  )
}

export default App
