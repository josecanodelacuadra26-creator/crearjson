import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap'

function MovieModal({ pelicula, isOpen, toggle }) {
  if (!pelicula) return null

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" className="modal-movie">
      <ModalHeader toggle={toggle}>
        {pelicula.titulo}
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col md="4" className="mb-3 mb-md-0">
            <img
              src={pelicula.poster}
              alt={pelicula.titulo}
              className="img-fluid rounded"
            />
          </Col>
          <Col md="8">
            <div className="mb-3">
              <span className="badge-rating me-2">{pelicula.rating}</span>
              <span className="genre-badge">{pelicula.genero}</span>
            </div>

            <div className="movie-detail-label">Año</div>
            <div className="movie-detail-value">{pelicula.año}</div>

            <div className="movie-detail-label">Director</div>
            <div className="movie-detail-value">{pelicula.director}</div>

            <div className="movie-detail-label">Duración</div>
            <div className="movie-detail-value">{pelicula.duracion} minutos</div>

            <div className="movie-detail-label">Sinopsis</div>
            <p className="movie-detail-sinopsis">{pelicula.sinopsis}</p>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default MovieModal
