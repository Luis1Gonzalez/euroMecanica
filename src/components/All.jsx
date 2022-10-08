import React from 'react'

const All = ({ wrap, setRegisterDel, delRegister }) => {


const {client, reception, brand, model, year, id} = wrap


const handleDel = () => {
    const responseDel = confirm(`¿Desea Eliminar el registro Nº: ${id}?`)
    if(responseDel){
        delRegister(id)

    }
}


var today = new Date();
var now = today.toLocaleString();
console.log(now);
    return (
        <div className='mt-1 md:mt-0 text-blue-500 md:mx-1'>


    <div key={id} className='mt-1 bg-gray-200 p-2 rounded-xl'>
    <p className='mb-3'>Registro:<span className='text-red-800'>{` ${id}`}</span> </p>
    <p>Ultima Actualización: <span className='text-red-800'>{`${now}`}</span></p>
    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="client" className="mr-3 text-italic w-1/4">Cliente:</label>
        <p className='rounded w-3/4 py-0.5 text-center placeholder:italic'>{client}</p>
    </div>

    <div className='my-1 px-1 flex justify-between items-center'>
        <label htmlFor="reception" className="mr-3 text-italic w-1/4">Recepción:</label>
        <p className='rounded max-h-7 text-center w-[370px]'>{reception}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="brand" className="mr-3 text-italic w-1/4">Marca:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{brand}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="model" className="mr-3 text-italic w-1/4">Modelo:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{model}</p>
    </div>

    <div className='my-1 px-1 flex justify-between'>
        <label htmlFor="year" className="mr-3 text-italic w-1/4">Año:</label>
        <p className='rounded w-3/4 py-0.5 text-center'>{year}</p>
    </div>

    <div className='flex justify-around px-3 my-4 text-white'>
    <button type='button' onClick={() => setRegisterDel(wrap)} className='border-2 p-1.5 rounded-lg bg-green-600 shadow-lg w-36'>Editar</button>
    <button type='button' onClick={handleDel} className='border-2 p-1.5 rounded-lg bg-red-600 shadow-lg h-11 w-36'>Eliminar</button>
</div>

</div>


            



        </div>
    )
}

export default All