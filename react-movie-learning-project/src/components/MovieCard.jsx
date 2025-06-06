import '../css/MovieCard.css';


function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("clicked");
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button className="favorite-btn" onClick={onFavoriteClick}>
             ❤️
            </button>
        </div>
        
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
  );
}
export default MovieCard;