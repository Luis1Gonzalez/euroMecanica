
import React from 'react'

import { Link } from 'react-router-dom';

const Budget = ({ cambiazo }) => {

  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();


  const { client, cel, mail, reception, promise, possibleFailure, km, failure, delivered, brand, model, id, year, now } = cambiazo

  return (
    <div className='w-full h-full border bg-red-200  text-xs sm:text-base md:text-lg'>

      <p className='bg-blue-200 text-center text-2xl my-4 p-2'>Presupuesto</p>

      <div className='w-full h-auto flex'>
        <div className='w-1/2 border-gray-600 border-2 p-2 mx-2'>
          <p>Cliente</p>
          <p>Telefono</p>
          <p>Email</p>
        </div>

        <div className='w-1/2 border-2 border-gray-600 p-2 mx-2'>
          <p>{client}</p>
          <p>{cel}</p>
          <p>{mail}</p>
        </div>
      </div>

      <div className='flex mt-2 border-2 border-gray-600 mx-2'>
        <p className='w-1/2 p-2 mx-2'>{`Fecha del presupuesto: ${output}`}</p>
        <p className='w-1/2 p-2 mx-2'>Validez: 10 días habiles</p>
      </div>

      <form className=' border-2 border-gray-600 p-2 mx-2 mt-2 flex flex-col'>

        <div className='w-full flex justify-between'>
          <p className='w-2/3'>Descripción</p>
          <p className='text-center w-1/5'>Cant.</p>
          <p className='text-center w-1/5'>Precio</p>
          <p className='text-center w-1/5'>Total</p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

        <div className='w-full flex justify-between items-center p-1  bg-violet-400'>
          <input type="text" className='mx-1 w-2/3 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <input type="text" className='mx-1 w-1/6 h-5' />
          <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'></p>
        </div>

      </form>

      <div className="mt-2 border-2 border-gray-600 mx-2">
        <div className='flex justify-end px-2'>
          <p className='mx-7'>Sub-Total</p>
          <p>800,00$</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Descuento</p>
          <p>35,00$</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Iva</p>
          <p>21,00%</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Total Presupuesto</p>
          <p>1034,29$</p>
        </div>

      </div>

      <div className="mt-2 border-2 border-gray-600 mx-2 flex">
        <div className='w-2/3 h-[100px] flex justify-center items-center border '>
          <p>Firma y Sello</p>
        </div>

        <div className='w-1/3 h-[100px] flex justify-center items-center border-l-2 border-gray-600'>
          <p>Firma del Cliente</p>
        </div>
      </div>


    </div>
  )
}

export default Budget