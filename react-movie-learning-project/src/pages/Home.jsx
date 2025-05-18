import MovieCard from "../components/MovieCard";
import { useState } from "react";


function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {id: 1, title: "John Wick", release_date: "2023-01-01", overview: "Overview of Movie 1", poster_path: "/path/to/poster1.jpg"},
    {id: 2, title: "Terminator", release_date: "2023-02-01", overview: "Overview of Movie 2", poster_path: "/path/to/poster2.jpg"},
    {id: 3, title: "The matrix", release_date: "2023-03-01", overview: "Overview of Movie 3", poster_path: "/path/to/poster3.jpg"},
  ];


  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>


        <div div className="movies-grid">
          {movies.map( (movie) => (
            movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      
    </div>
  );
}

export default Home;