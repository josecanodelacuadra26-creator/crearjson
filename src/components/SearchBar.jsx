import { Input } from 'reactstrap'

function SearchBar({ value, onChange }) {
  return (
    <div>
      <label>Buscar película</label>
      <Input
        type="text"
        placeholder="Buscar por título..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
