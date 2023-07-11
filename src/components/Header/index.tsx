import { Link } from 'react-router-dom'

import logo from '../../image1.png'

const Header = () => {
  return (
    <header className='body-font w-full border-t border-gray-100 bg-zinc-50 text-gray-800 shadow-xl'>
      <div className='container mx-auto flex flex-col flex-wrap items-center justify-center p-5 md:flex-row'>
        <div>
          <Link to='/'>
            <img className='h-14' src={logo} alt='logo' />
          </Link>
        </div>
        <div className='mx-5 text-4xl font-semibold'>Киновтопку</div>
      </div>
    </header>
  )
}

export default Header
