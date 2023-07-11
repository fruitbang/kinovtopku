import { useMemo, useState } from 'react'

import { useGetMoviesListQuery } from '../../app/api/moviesSlice'
import Header from '../../components/Header'
import MoviesListItem from '../../components/MovieListItem'
import SortButton from '../../components/SortButton'

const Home = () => {
  const { data, error, isLoading } = useGetMoviesListQuery()

  const [sortDirection, setSortDirection] = useState<
    'acc' | 'desc' | undefined
  >(undefined)

  const handleChangeSortDirection = () =>
    setSortDirection((sortDirection) => {
      switch (sortDirection) {
        case 'desc':
          return 'acc'
        case 'acc':
          return undefined
        case undefined:
          return 'desc'
      }
    })

  const sortedData = useMemo(() => {
    let sortedData
    switch (sortDirection) {
      case 'desc':
        sortedData = [...(data ?? [])].sort((a, b) => b.rating - a.rating)
        break
      case 'acc':
        sortedData = [...(data ?? [])].sort((a, b) => a.rating - b.rating)
        break
      default:
        sortedData = data
    }
    return sortedData
  }, [data, sortDirection])

  if (error) {
    return <div>Something went wrong :(</div>
  }

  return (
    <>
      <Header />
      {!isLoading && data ? (
        <div className=' mx-auto flex max-w-7xl flex-col items-center px-5 py-8 sm:px-6 lg:px-8'>
          <div className='mx-auto flex w-full max-w-3xl flex-col text-left'>
            <div className='mx-auto flex w-full justify-around'>
              <h1>Сортировка по рейтингу: </h1>
              <SortButton
                onClick={handleChangeSortDirection}
                sortDirection={sortDirection}
              />
            </div>
            {sortedData!.map((movie) => (
              <MoviesListItem key={String(movie.id)} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  )
}

export default Home
