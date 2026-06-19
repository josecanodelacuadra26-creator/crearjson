import { Container } from 'reactstrap'
import data from '../data/peliculas.json'
import MovieList from '../components/MovieList'

function Home() {
  const peliculas = data.peliculas

  return (
    <>
      <header className="app-header">
        <Container>
          <h1>🎬 Buscador de Películas</h1>
          <p>Explora nuestra colección de {peliculas.length} películas</p>
        </Container>
      </header>
      <Container>
        <MovieList peliculas={peliculas} onMovieClick={() => {}} />
      </Container>
    </>
  )
}

export default Home
