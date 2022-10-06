import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-around my-2 py-1 text-blue-500'>
        <div className="">Inicio</div>
        <div className="border-l md:border-none pl-1">Todos</div>
        <div className="border-l md:border-none pl-1">Pendientes</div>
    </div>
  )
}

export default Nav