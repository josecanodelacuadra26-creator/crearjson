import { useState } from 'react'
import { Container } from 'reactstrap'
import data from '../data/peliculas.json'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const peliculas = data.peliculas

  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>
        <MovieList peliculas={filtradas} onMovieClick={() => {}} />
      </Container>
    </>
  )
}

export default Home
