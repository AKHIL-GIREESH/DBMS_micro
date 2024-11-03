import './App.css'
import MovieCard from "../components/Movie/MovieCard"
import Navbar from "../components/Navbar/Navbar.tsx"

function App() {
  //const [count, setCount] = useState(0)
  const movieCards = [];
  
  for (let i = 0; i < 10; i++) {
      movieCards.push(<MovieCard key={i} />);
  }

  return (
    <>
      <Navbar/>
      <div className='text-center pt-[3vh] bg-light text-white'>
        <div className='bg-gold-gradient2 ml-[5vw] w-[90vw] pb-[5vh] rounded-lg'>
          <h1 className='font-extrabold mb-[5vh] pt-[5vh] text-black'>HIGHEST RATED</h1>
          <div className='flex flex-wrap m-0 justify-evenly'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
          </div>
        </div>
        
        <h1 className='font-extrabold mb-[3vh] text-my-gold pt-[5vh]'>Recommended</h1>
        <div className='ml-[3vw] grid grid-cols-5 w-[94vw] m-0 justify-evenly'>
          {movieCards}
        </div>
      </div>
    </>
    
  )
}

export default App
