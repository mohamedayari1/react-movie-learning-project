import '../css/Favorites.css';

function Favorites() {
  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <p>Here you can find your favorite movies.</p>
      <div className="movie-grid">
        {/* Movie cards will be rendered here */}
      </div>
    </div>
  )
}
export default Favorites;