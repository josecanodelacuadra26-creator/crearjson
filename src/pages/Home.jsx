import { useState, useMemo } from 'react'
import { Container, Row, Col } from 'reactstrap'
import data from '../data/peliculas.json'
import SearchBar from '../components/SearchBar'
import GenreFilter from '../components/GenreFilter'
import MovieList from '../components/MovieList'
import MovieModal from '../components/MovieModal'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [genero, setGenero] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const peliculas = data.peliculas

  const filtradas = useMemo(() => {
    const idsDelGenero = genero
      ? new Set(data.indice_por_genero[genero])
      : null

    return peliculas.filter(p => {
      if (idsDelGenero && !idsDelGenero.has(p.id)) return false
      if (searchTerm && !p.titulo.toLowerCase().includes(searchTerm.toLowerCase())) return false
      return true
    })
  }, [searchTerm, genero, peliculas])

  function openModal(pelicula) {
    setSelectedMovie(pelicula)
    setModalOpen(true)
  }

  function closeModal() {
    setModalOpen(false)
  }

  return (
    <>
      <header className="app-header">
        <Container>
          <h1>🎬 Buscador de Películas</h1>
          <p>Explora nuestra colección de {peliculas.length} películas</p>
        </Container>
      </header>
      <Container>
        <div className="filter-bar">
          <Row>
            <Col md="6" className="mb-2 mb-md-0">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </Col>
            <Col md="4">
              <GenreFilter value={genero} onChange={setGenero} />
            </Col>
          </Row>
        </div>
        <MovieList peliculas={filtradas} onMovieClick={openModal} />
      </Container>

      <MovieModal
        pelicula={selectedMovie}
        isOpen={modalOpen}
        toggle={closeModal}
      />
    </>
  )
}

export default Home
