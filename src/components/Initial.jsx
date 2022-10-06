import React from 'react'

const Initial = () => {
    return (
        <div className='my-2 border py-1 text-blue-500  bg-gray-300'>
            <form action="" className='flex flex-col justify-center'>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="client" className="mr-3 text-italic w-1/3">Cliente:</label>
                    <input type="text" id='client' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Nombre del Cliente' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="cel" className="mr-3 text-italic w-1/3">Movil:</label>
                    <input type="tel" id='cel' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Movil del Cliente' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="email" className="mr-3 text-italic w-1/3">Email:</label>
                    <input type="mail" id='email' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='E-mail del Cliente' />
                </div>

                <div className='my-1 px-1 flex justify-between items-center'>
                    <label htmlFor="reception" className="mr-3 text-italic w-1/3">Recepción:</label>
                    <input type="date" id='reception' className='rounded max-h-7'/>
                </div>

                <div className='my-1 px-1 flex justify-between items-center'>
                    <label htmlFor="promise" className="mr-3 text-italic w-1/3">Fecha de Compromiso:</label>
                    <input type="date" id='promise' className='rounded max-h-7' />
                </div>

                <div className='my-1 px-1 flex justify-between items-center'>
                    <label htmlFor="delivered" className="mr-3 text-italic w-1/3">Entrega:</label>
                    <input type="date" id='delivered' className='rounded max-h-7' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="possibleFailure" className="mr-3 text-italic w-1/3">Posible Falla:</label>
                    <textarea name="textarea" id='client' rows="3" className='rounded w-2/3 placeholder-slate-300 py-0.5 text-justify placeholder:italic' placeholder='Descripción: Posible falla' />
                </div>

                <div className='mt-4 text-center'>
                <span className='text-center'>Datos del Vehiculo</span>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="brand" className="mr-3 text-italic w-1/3">Marca:</label>
                    <input type="text" id='brand' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Marca del Vehiculo' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="model" className="mr-3 text-italic w-1/3">Modelo:</label>
                    <input type="text" id='model' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Modelo del Vehiculo' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="year" className="mr-3 text-italic w-1/3">Año:</label>
                    <input type="number" id='year' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Año del Vehiculo' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="km" className="mr-3 text-italic w-1/3">Km:</label>
                    <input type="number" id='km' className='rounded w-2/3 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Kilometraje' />
                </div>

                <div className='my-1 px-1 flex justify-between'>
                    <label htmlFor="failure" className="mr-3 text-italic w-1/3">Falla:</label>
                    <textarea name="textarea" id='failure' rows="3" className='rounded w-2/3 placeholder-slate-300 py-0.5 text-justify placeholder:italic' placeholder='Descripción: Falla detectada' />
                </div>

                </div>

                <div className='flex justify-between px-3 my-4 text-white'>
                    <input type='submit' className='border p-1.5 rounded-lg bg-blue-600 shadow-lg w-20' value="Guardar" />
                    <input type='submit' className='border p-1.5 rounded-lg bg-green-600 shadow-lg w-20' value="Editar" />
                    <input type='submit' className='border p-1.5 rounded-lg bg-red-600 shadow-lg w-20' value="Eliminar" />
                </div>

            </form>
        </div>
    )
}

export default Initial