import { Input } from 'reactstrap'
import data from '../data/peliculas.json'

const generos = Object.keys(data.indice_por_genero).sort()

function GenreFilter({ value, onChange }) {
  return (
    <div>
      <label>Género</label>
      <Input
        type="select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Todos los géneros</option>
        {generos.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </Input>
    </div>
  )
}

export default GenreFilter
