import { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import AuthenticatedLayout from '../../layouts/authenticated'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_MOVIES } from '../../graphql/queries/movies'
import { useLazyQuery } from '@apollo/client'
import Spinner from '../../components/common/Spinner'
import { toast } from 'react-toastify'
import MovieCard from '../../components/MovieCard'
function Search () {
  const [searchValue, setSearchValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [getMovies, { data, error, loading }] = useLazyQuery(SEARCH_MOVIES)
  useEffect(() => {
    setSearchValue(searchParams.get('q') || '')
    if (searchParams.get('q')) {
      getMovies({ variables: { query: searchParams.get('q') } })
    }
    if (error) {
      toast.error(error.message)
    }
  }, [searchParams])

  const handleSubmit = () => {
    setSearchParams({ q: searchValue })
  }
  return (
    <AuthenticatedLayout>
      <section className='flex flex-col gap-5'>
        <h2 className='text-center mb-5 text-3xl font-bold'>
          Find out any movie
        </h2>
        <SearchBar
          onChange={(value) => setSearchValue(value)}
          value={searchValue}
          onSubmit={handleSubmit}
        />
        {loading && <Spinner />}
        {data?.searchMovies?.length === 0 && <p className='text-center'>Not movies found</p>}
        <div className='flex flex-wrap justify-center items-center gap-10 pt-12 px-5 lg:px-16'>
          {data?.searchMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </AuthenticatedLayout>
  )
}

export default Search
