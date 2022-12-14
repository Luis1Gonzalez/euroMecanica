import React from 'react'
import logo from './../assets/logo.png'

const Header = () => {
  return (
    <div className="wrap_header md:px-6  md:h-32 flex justify-center grow border bg-gray-300">
        <div className="wrap_logo w-1/3 flex justify-center">
            <img className='h-full' src={logo} alt="logo de EuroMecánica" />
        </div>
        <div className="wrap_name w-2/3 flex justify-center md:justify-start md:text-4xl items-center text-2xl font-bold text-center text-red-600">Talleres EuroMeacánica</div>
    </div>
  )
}

export default Header