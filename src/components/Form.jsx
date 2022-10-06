import React, { useState } from 'react'
import Error from './Error'

const Form = ({ register, setRegister }) => {

    const [client, setClient] = useState('');
    const [cel, setCel] = useState('');
    const [mail, setMail] = useState('');
    const [reception, setReception] = useState('');
    const [promise, setPromise] = useState('');
    const [delivered, setDelivered] = useState('');
    const [possibleFailure, setPossibleFailure] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [km, setKm] = useState('');
    const [failure, setFailure] = useState('');

    const [error, setError] = useState(false)

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const dateNow = Date.now().toString(36);
        return random + dateNow;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(client);

        if ([client, cel, mail, reception, promise, delivered, possibleFailure, brand, model, year, km, failure].includes('')) {
            console.log('Todos los campo requeridos');
            setError(true);
            return
        }
        setError(false);

        const ObjectRegister = {
            client,
            cel,
            mail,
            reception,
            promise,
            delivered,
            possibleFailure,
            brand,
            model,
            year,
            km,
            failure,
            id: generateId()
        }

        
        ObjectRegister.id = generateId()
        setRegister([...register, ObjectRegister])










        setClient('');
        setCel('');
        setMail('');
        setReception('');
        setPromise('');
        setDelivered('');
        setPossibleFailure('');
        setBrand('');
        setModel('');
        setYear('');
        setKm('');
        setFailure('');


    }


    return (
        <div className='border py-1 mb-1 md:mb-0 text-blue-500 bg-gray-200 md:w-1/2 md:mx-1 shadow-xl'>
            <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center'>

                <div className='mt-4'>
                    <span className='flex justify-center mb-3'>Datos del Cliente</span>
                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="client" className="mr-3 text-italic w-1/4">Cliente:</label>
                        <input type="text" id='client' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Nombre del Cliente' value={client} onChange={(e) => setClient(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="cel" className="mr-3 text-italic w-1/4">Movil:</label>
                        <input type="tel" id='cel' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Movil del Cliente' value={cel} onChange={(e) => setCel(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="email" className="mr-3 text-italic w-1/4">Email:</label>
                        <input type="mail" id='email' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='E-mail del Cliente' value={mail} onChange={(e) => setMail(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between items-center'>
                        <label htmlFor="reception" className="mr-3 text-italic w-1/4">Recepción:</label>
                        <input type="date" id='reception' className='rounded bg-white max-h-7 w-[170px] text-center' value={reception} onChange={(e) => setReception(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between items-center'>
                        <label htmlFor="promise" className="mr-3 text-italic w-1/4">Compromiso:</label>
                        <input type="date" id='promise' className='rounded bg-white max-h-7 w-[170px] text-center' value={promise} onChange={(e) => setPromise(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between items-center'>
                        <label htmlFor="delivered" className="mr-3 text-italic w-1/4">Entrega:</label>
                        <input type="date" id='delivered' className='rounded bg-white max-h-7 w-[170px] text-center' value={delivered} onChange={(e) => setDelivered(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="possibleFailure" className="mr-3 text-italic w-1/4">Posible Falla:</label>
                        <textarea name="textarea" id='client' rows="3" className='rounded w-3/4 placeholder-slate-300 py-0.5 text-justify placeholder:italic' placeholder='Descripción: Posible falla' value={possibleFailure} onChange={(e) => setPossibleFailure(e.target.value)} />
                    </div>

                </div>

                <div className='mt-4'>
                    <span className='flex justify-center mb-3'>Datos del Vehiculo</span>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="brand" className="mr-3 text-italic w-1/4">Marca:</label>
                        <input type="text" id='brand' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Marca del Vehiculo' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="model" className="mr-3 text-italic w-1/4">Modelo:</label>
                        <input type="text" id='model' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Modelo del Vehiculo' value={model} onChange={(e) => setModel(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="year" className="mr-3 text-italic w-1/4">Año:</label>
                        <input type="number" id='year' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Año del Vehiculo' value={year} onChange={(e) => setYear(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="km" className="mr-3 text-italic w-1/4">Km:</label>
                        <input type="number" id='km' className='rounded w-3/4 placeholder-slate-300 py-0.5 text-center placeholder:italic' placeholder='Kilometraje' value={km} onChange={(e) => setKm(e.target.value)} />
                    </div>

                    <div className='my-1 px-1 flex justify-between'>
                        <label htmlFor="failure" className="mr-3 text-italic w-1/4">Falla:</label>
                        <textarea name="textarea" id='failure' rows="3" className='rounded w-3/4 placeholder-slate-300 py-0.5 text-justify placeholder:italic' placeholder='Descripción: Falla detectada' value={failure} onChange={(e) => setFailure(e.target.value)} />
                    </div>

                </div>

                {error && <Error>
                    <span>Error:</span>
                    <p>Todos los Campos son Obligatorios</p>
                </Error>}

                <div className='flex justify-between px-3 my-4 text-white'>
                    <input type='submit' className='border w-full p-1.5 rounded-lg bg-blue-600 shadow-lg' value="Guardar Registro" />
                </div>

            </form>
        </div>
    )
}

export default Form