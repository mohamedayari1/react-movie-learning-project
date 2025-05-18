
import './App.css'
import MovieCard from "./components/MovieCard"
import Home from "./pages/Home"

function App() {
  return (
    <>
      {/* <MovieCard movie = {{title : "kachta movie",
        release_date : "2023",
        url : "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4x1j0q5g6k7J8X9Y0Z1m2Qz5c4E.jpg"
      }}/> */}

        <Home />
      </>
  )
}

function Text({inputText}) {

  return <div><p>{inputText}  </p></div>

}


export default App
