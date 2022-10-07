import React from 'react'

const All = ({ register }) => {
// const { client,cel,mail,reception,promise,delivered,possibleFailure,brand,model,year,km,failure,id } = regist
    return (
        <div className='border mt-1 md:mt-0 py-1 text-blue-500 bg-gray-200 shadow-xl md:w-1/2 md:mx-1'>

{register.map((registeres) => (
    <div key={registeres.id} className='mt-4 border'>
    <span className='flex justify-center mb-3'>Datos del Cliente</span>
    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="client" className="mr-3 text-italic w-1/4">Cliente:</label>
        <p className='rounded w-3/4 py-0.5 text-center placeholder:italic'>{registeres.client}</p>
    </div>

    <div className='my-1 px-1 flex justify-between items-center'>
        <label htmlFor="reception" className="mr-3 text-italic w-1/4">Recepción:</label>
        <p className='rounded max-h-7 text-center w-[370px]'>{registeres.reception}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="brand" className="mr-3 text-italic w-1/4">Marca:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{registeres.brand}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="model" className="mr-3 text-italic w-1/4">Modelo:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{registeres.model}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="year" className="mr-3 text-italic w-1/4">Año:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{registeres.year}</p>
    </div>

    <div className='flex justify-between px-3 my-4 text-white'>
    <input type='submit' className='border p-1.5 rounded-lg bg-green-600 shadow-lg w-20' value="Editar" />
    <input type='submit' className='border p-1.5 rounded-lg bg-red-600 shadow-lg w-20' value="Eliminar" />
</div>

</div>
))}

            



        </div>
    )
}

export default All