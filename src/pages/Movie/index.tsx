import { useParams } from 'react-router-dom'

import { useGetMovieByIdQuery } from '../../app/api/moviesSlice'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'

const Movie = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useGetMovieByIdQuery(
    { id: id! },
    { skip: !id }
  )

  if (error) {
    return <div>Something went wrong :(</div>
  }

  return (
    <>
      <Header />
      {!isLoading && data ? (
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24'>
          <div className='mx-auto flex max-w-7xl flex-wrap items-center'>
            <div className='w-full rounded-xl lg:w-1/2 lg:max-w-lg'>
              <div>
                <div className='relative w-full max-w-lg'>
                  <Carousel
                    imageIds={data.img}
                    imgDirectory={data.imgDirectory}
                  />
                </div>
              </div>
            </div>
            <div className='mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24'>
              <div className='flex w-full justify-between '>
                <span className='mb-8 text-xs font-bold uppercase tracking-widest text-blue-600'>
                  Director: {data.director}
                </span>
                <span className='mx-3 mb-8 text-xs font-bold uppercase tracking-widest text-slate-500'>
                  Year: {data.year}
                </span>
                <span className='mb-8 text-xs font-bold uppercase tracking-widest text-slate-500'>
                  Rating: {data.rating}
                </span>
              </div>
              <h1 className='mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl'>
                {data.name}
              </h1>
              <p className='mb-8 text-left text-base leading-relaxed text-gray-500'>
                {data.description}
              </p>
              <div className='-mx-4 mt-2 flex w-full flex-wrap text-left'>
                Cast: {data.cast.join(', ')}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  )
}

export default Movie
