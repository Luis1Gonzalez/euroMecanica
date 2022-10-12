import React, { useState } from 'react'

const Modal = ({ registerDel, setRegisterDel, wrap, setShowModal, showModal, isShowModal, isCloseModal }) => {


    const { client, cel, mail, reception, promise, possibleFailure, km, failure, delivered, brand, model, year, id, now } = wrap


    return (
        <div className='transform transition-all fixed w-full min-w-[320px] left-0  top-0 md:top-36' style={{visibility:`${showModal}`}}>


            <div className=' bg-blue-800 w-[100%] flex flex-wrap justify-center bg-transparent h-auto'>

                <div className='bg-orange-200 h-auto max-w-screen-md'>

                    <div key={id} className='p-3'>

                        <div className='flex justify-end'>
                            <p className='m-3'>Print</p>
                            <button className='mx-6 text-4xl text-red-600' onClick={() =>isShowModal(registerDel)}>x</button>
                        </div>

                        <p className='mb-3'>Registro:<span className='text-red-800'>{` ${id}`}</span> </p>
                        <p>Ultima Actualización: <span className='text-red-800'>{`${now}`}</span></p>

                        <div className='my-1'>

                            <div className='my-2 px-1 flex justify-between upper'>
                                <label htmlFor="client" className="mr-3 text-italic w-1/4">Cliente:</label>
                                <p className='rounded w-3/4 py-0.5 text-center placeholder:italic uppercase'>{client}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between items-center'>
                                <label htmlFor="cel" className="mr-3 text-italic w-1/4">Movil:</label>
                                <p className='rounded max-h-7 text-center sm:text-start w-[310px]'>{cel}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between'>
                                <label htmlFor="mail" className="mr-3 text-italic w-1/4">Email:</label>
                                <p className='rounded w-3/4 py-0.5 text-center lowecase'>{mail}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between'>
                                <label htmlFor="reception" className="mr-3 text-italic w-1/4">Recepción:</label>
                                <p className='rounded w-3/4 py-0.5 text-center uppercase'>{reception}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between'>
                                <label htmlFor="promise" className="mr-3 text-italic w-1/4">Comproiso:</label>
                                <p className='rounded w-3/4 py-0.5 text-center'>{promise}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between upper'>
                                <label htmlFor="delivered" className="mr-3 text-italic w-1/4">Entrega:</label>
                                <p className='rounded w-3/4 py-0.5 text-center placeholder:italic uppercase'>{delivered}</p>
                            </div>

                            <div className='my-2 px-1 flex justify-between items-center'>
                                <label htmlFor="possibleFailure" className="mr-3 text-italic w-1/4">Posible Falla:</label>
                                <p className='w-3/4 flex overflow-y-scroll h-20 border p-1'>{possibleFailure}</p>
                            </div>

                        </div>

                        <div className=' my-1'>

                            <div className='my-4 px-1 flex justify-between'>
                                <label htmlFor="brand" className="mr-3 text-italic w-1/4">Marca:</label>
                                <p className='rounded w-3/4 py-0.5 text-center uppercase'>{brand}</p>
                            </div>

                            <div className='my-4 px-1 flex justify-between'>
                                <label htmlFor="model" className="mr-3 text-italic w-1/4">Modelo:</label>
                                <p className='rounded w-3/4 py-0.5 text-center uppercase'>{model}</p>
                            </div>

                            <div className='my-4 px-1 flex justify-between'>
                                <label htmlFor="year" className="mr-3 text-italic w-1/4">Año:</label>
                                <p className='rounded  py-0.5  text-center sm:text-start w-[310px]'>{km}</p>
                            </div>

                            <div className='my-4 px-1 flex justify-between mb-5'>
                                <label htmlFor="failure" className="mr-3 text-italic w-1/4">Falla:</label>
                                <p className='w-3/4 flex overflow-y-scroll h-20 border p-1'>{failure}</p>
                            </div>

                        </div>


                    </div>




                </div>
            </div>
        </div>
    )
}

export default Modal