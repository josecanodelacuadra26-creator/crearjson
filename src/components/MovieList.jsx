import { Row, Col } from 'reactstrap'
import MovieCard from './MovieCard'

function MovieList({ peliculas, onMovieClick }) {
  if (peliculas.length === 0) {
    return (
      <div className="text-center py-5">
        <h4 className="text-muted">No se encontraron películas</h4>
        <p className="text-muted">Intenta con otros términos de búsqueda</p>
      </div>
    )
  }

  return (
    <>
      <p className="result-count mb-3">
        {peliculas.length} película{peliculas.length !== 1 ? 's' : ''} encontrada{peliculas.length !== 1 ? 's' : ''}
      </p>
      <Row>
        {peliculas.map(pelicula => (
          <Col key={pelicula.id} xs="12" sm="6" md="4" lg="3" className="mb-4">
            <MovieCard pelicula={pelicula} onClick={onMovieClick} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default MovieList
