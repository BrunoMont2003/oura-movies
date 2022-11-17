import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import './style.css'
function SearchBar ({
  placeholder = 'Search for a movie',
  onChange = () => {},
  value = '',
  onSubmit = () => {}
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      className='h-16 relative bg-neutral-900 bg-opacity-60 w-[350px] md:w-[500px] overflow-hidden search-bar-container'
    >
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        className='search-bar  w-full h-full pr-5 pl-9 bg-transparent placeholder:text-neutral-400 text-white focus:outline-none'
        onChange={(e) => onChange(e.target.value)}
      />
      <MagnifyingGlassIcon className='search-bar-icon absolute text-neutral-400 top-6 left-3' />
      <button className='search-bar-button absolute right-0 top-0 h-full w-16 bg-primary-500 text-white'>
        Search
      </button>
    </form>
  )
}

export default SearchBar
