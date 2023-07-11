interface SortButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sortDirection?: 'acc' | 'desc'
}

const SortButton = ({ sortDirection, ...rest }: SortButtonProps) => {
  switch (sortDirection) {
    case 'acc':
      return (
        <button
          className='background-transparent duration-150" mb-1 mr-1 px-8 py-3 font-bold uppercase text-orange-400 outline-none transition-all ease-linear focus:outline-none'
          {...rest}
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
              d='M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12'
            />
          </svg>
        </button>
      )
    case 'desc':
      return (
        <button
          className='background-transparent duration-150" mb-1 mr-1 px-8 py-3 font-bold uppercase text-blue-600 outline-none transition-all ease-linear focus:outline-none'
          {...rest}
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
              d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25'
            />
          </svg>
        </button>
      )
    default:
      return (
        <button
          className='background-transparent duration-150" mb-1 mr-1 px-8 py-3 font-bold uppercase text-gray-500 outline-none transition-all ease-linear focus:outline-none'
          {...rest}
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
              d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
            />
          </svg>
        </button>
      )
  }
}

export default SortButton
