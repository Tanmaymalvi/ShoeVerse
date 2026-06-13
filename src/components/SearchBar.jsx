import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <FiSearch />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search premium footwear" />
    </label>
  )
}
