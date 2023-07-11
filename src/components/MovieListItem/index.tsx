import { Link } from 'react-router-dom'

import useFetchImage from '../../app/api/moviesSlice/useFetchImage'
import type { Movie } from '../../app/api/types'

const MoviesListItem = ({ movie }: { movie: Movie }) => {
  const img = useFetchImage({
    imageId: movie.preview,
    imgDirectory: movie.imgDirectory,
  })

  return (
    <div className='mx-auto my-10 flex w-full max-w-7xl flex-col items-center justify-between border-b border-gray-200 pb-10 sm:flex-row'>
      {img && (
        <img
          className='h-32 w-full rounded-md object-scale-down lg:w-32'
          src={img}
        />
      )}
      <div className='mx-4 mt-6 flex-grow sm:mt-0 sm:text-left'>
        <div className='flex items-center justify-around'>
          <Link to={`movie/${movie.id}`}>
            <h1 className='my-3 text-lg font-bold leading-6'>{movie.name}</h1>
          </Link>
          <div className='text-xs font-bold uppercase tracking-widest text-blue-600'>
            Rating: {movie.rating}
          </div>
        </div>
        <p className='text-gray-800'>{movie.shortDescription}</p>
        <div className='mt-2 flex w-full flex-wrap text-left text-xs'>
          Cast: {movie.cast.join(', ')}
        </div>
      </div>
    </div>
  )
}

export default MoviesListItem
