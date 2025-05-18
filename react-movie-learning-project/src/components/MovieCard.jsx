function MovieCard({ movie }) {
    function onFavoriteClick() {
        alert("clicked");
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <button className="favorite-btn" onClick={onFavoriteClick}>
                ⏳
            </button>
        
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </div>
            
        
        </div>
    </div>
  );
}
export default MovieCard;