import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-around my-2 border py-1 text-blue-500  bg-gray-300'>
        <div className="">Inicio</div>
        <div className="border-l pl-1">Todos</div>
        <div className="border-l pl-1">Pendientes</div>
        <div className="border-l pl-1">Reparados</div>
    </div>
  )
}

export default Nav