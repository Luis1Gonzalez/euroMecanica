
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PrintBudget = ({ cambiazo, printBudget, setPrintBudget, details, setDetails, conjuntTotals, setConjuntTotals }) => {



    const { client, cel, mail, reception, promise, possibleFailure, km, failure, delivered, brand, model, id, year, now } = cambiazo



    let date = new Date();
    let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    const generateIdPresupuesto = () => {
        const dateNow = Date.now().toString(36).toUpperCase();
        return dateNow;
      }

      const clearBudgetPrint = () => {
        setConjuntTotals('')
        setConjuntDetails([])
      }

      console.log(details)

    return (

        <div className='w-full border  text-xs sm:text-base md:text-lg'>

<div className='flex justify-end items-center h-1 py-2 px-2'>
      <p className='text-xs mx-2'><Link to='/budget' onClick={() => clearBudgetPrint()}>Volver</Link></p>
        <p className='text-xs mx-2'><Link to='/printbudget'>Print</Link></p>
      </div>

            <p className=' text-center text-2xl p-2'>Presupuesto</p>
            <div className='flex justify-end px-4 mb-2 text-red-900'>
                <p>{`Nº: ${generateIdPresupuesto()}`}</p>
            </div>

            <div className='w-full h-auto flex'>
                <div className='w-1/2 border-gray-600 border-2 p-2 mx-2'>
                    <p>Cliente</p>
                    <p>Telefono</p>
                    <p>Email</p>
                </div>

                <div className='w-1/2 border-2 border-gray-600 p-2 mx-2'>
                    <p className='uppercase'>{client}</p>
                    <p className=''>{cel}</p>
                    <p>{mail}</p>
                </div>
            </div>

            <div className='flex mt-2 border-2 border-gray-600 mx-2'>
                <p className='w-1/2 p-2 mx-2'>{`Fecha del presupuesto: ${output}`}</p>
                <p className='w-1/2 p-2 mx-2'>Validez: 10 días habiles</p>
            </div>

            <div className=' border-2 border-gray-600 p-2 mx-2 mt-2 flex flex-col'>

<div className='flex justify-end pr-3'>
    <p className='mr-16'>Cant</p>
    <p className='mr-16'>Precio</p>
    <p className='mr-6'>Total</p>
</div>

                {details.map((c) => (
                    <div className='w-full flex justify-between items-center py-1' key={c.id}>
                        <p className='mr-1 w-2/3 border-b-2 border-gray-600 h-5 flex items-center uppercase'>{c.description}</p>
                        <p className='mx-1 w-1/6 border-b-2 border-gray-600 h-5 flex justify-center items-center'>{c.cant}</p>
                        <p className='mx-1 w-1/6 border-b-2 border-gray-600 h-5 flex justify-center items-center'>{`${c.price}€`}</p>
                        <p className='mx-1 w-1/6 border-b-2 border-gray-600 h-5 flex items-center justify-center'>{`${c.prod}€`}</p>
                    </div>
                ))}
            </div>

            <div className="mt-2 border-2 border-gray-600 mx-2">
                <div className='flex justify-end px-2'>
                    <p className='mx-7'>Sub-Total</p>
                    <p>{`${conjuntTotals.subTotal}€`}</p>
                </div>

                <div className='flex justify-end px-2'>
                    <p className='mx-7'>Descuento</p>
                    <p>{`${conjuntTotals.discount}€`}</p>
                </div>

                <div className='flex justify-end px-2'>
                    <p className='mx-7'>Iva(21%)</p>
                    <p>{`${conjuntTotals.iva}€`}</p>
                </div>

                <div className='flex justify-end px-2'>
                    <p className='mx-7'>Total Presupuesto</p>
                    <p>{`${conjuntTotals.total}€`}</p>
                </div>

            </div>

        </div>

    )
}

export default PrintBudget