import { Card, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap'

function MovieCard({ pelicula, onClick }) {
  return (
    <Card className="movie-card" onClick={() => onClick(pelicula)}>
      <div className="movie-card-img-wrap">
        <img
          src={pelicula.poster}
          alt={pelicula.titulo}
          className="movie-card-img"
          loading="lazy"
        />
      </div>
      <CardBody>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <CardTitle tag="h5">{pelicula.titulo}</CardTitle>
          <Badge className="badge-rating">{pelicula.rating}</Badge>
        </div>
        <CardSubtitle className="mb-2">
          {pelicula.año} &middot; {pelicula.duracion} min
        </CardSubtitle>
        <span className="genre-badge mb-2">{pelicula.genero}</span>
        <CardText className="mt-2">
          {pelicula.sinopsis}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default MovieCard
