import { useState } from 'react'

import ImageLoader from '../ImageLoader'

const Carousel = ({
  imageIds,
  imgDirectory,
}: {
  imageIds: string[]
  imgDirectory: string
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0)

  const prev = () =>
    setCurrentImageIdx((curr) => (curr === 0 ? imageIds.length - 1 : curr - 1))

  const next = () =>
    setCurrentImageIdx((curr) => (curr === imageIds.length - 1 ? 0 : curr + 1))

  return (
    <>
      <div className='relative overflow-hidden rounded-lg shadow-2xl'>
        <div
          className='flex transition-transform duration-500 ease-out'
          style={{ transform: `translateX(-${currentImageIdx * 100}%)` }}
        >
          {imageIds.map((id) => (
            <ImageLoader key={id} id={id} imgDirectory={imgDirectory} />
          ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button
            className='rounded-full bg-slate-100 p-2 shadow hover:bg-white'
            onClick={prev}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            className='rounded-full bg-slate-100 p-2 shadow hover:bg-white'
            onClick={next}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel
