
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import PrintBudget from './PrintBudget';
import { Routes, BrowserRouter, Route } from "react-router-dom";

const Budget = ({ cambiazo, printBudget, setPrintBudget, conjuntDetails, setConjuntDetails, conjuntTotals, setConjuntTotals }) => {

  let date = new Date();
  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
  let count = 0
  let sum = 0;
  const ini = 0;
  let calcIva;
  let calcTotal;

  const { client, cel, mail, reception, promise, possibleFailure, km, failure, delivered, brand, model, id, year, now } = cambiazo


  const [details, setDetails] = useState([]);
  const [description, setDescripcion] = useState("");
  const [cant, setCant] = useState('');
  const [price, setPrice] = useState('');
  const [prod, setProd] = useState('');
  const [pine, setPine] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0);


  const [stButton, setSTButton] = useState('Generar');
  const [tButton, setTButton] = useState('Generar');

  const [cButton, setCButton] = useState('red');

  const [sCButton, setSCButton] = useState('green');



  const [sDisabled, setSDisabled] = useState(false);
  const [tDisabled, setTDisabled] = useState(false);


  const generateId = () => {
    const dateNow = Date.now().toString(36).toUpperCase();
    return dateNow;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description, cant, price) {
      const objDetail = {
        id: generateId(),
        description,
        cant,
        price,
        prod: cant * price,
        pine,

      }

      count = cant * price
      setPine([...pine, count])

      setDetails([...details, objDetail])

      setDescripcion('');
      setCant('');
      setPrice('');

      setPrintBudget(objDetail)
      setConjuntDetails([...conjuntDetails, objDetail])

    }

    sum = pine.reduce((prev, curr) => prev + curr, ini);
    setSubTotal(sum)

    calcIva = sum * 0.21;
    setIva(calcIva)

  }


  const changeButton = () => {

    if (sCButton === 'green') {
      setSTButton('Listo')
      setSCButton('yellow')
      setSDisabled(false)

    } else {
      setSTButton('Sub-Total')
      setSCButton('transparent')
      setSDisabled(true)
    }

  }

  const fCalcTotal = () => {

    calcTotal = (subTotal + iva - parseInt(discount));
setTotal(calcTotal)

        
    const objTotal = {
      
      subTotal,
      iva,
      total,
      discount:parseInt(discount)
    }

    if (cButton === 'red') {
      setTButton('Listo')
      setCButton('violet')
      setTDisabled(false)

    } else {
      setTButton('Total')
      setCButton('transparent')
      setTDisabled(true)
    }

    setConjuntTotals(objTotal)

    
  }

  return (
    <div className='w-full border bg-red-200  text-xs sm:text-base md:text-lg'>

      <div className='flex justify-end items-center h-1 py-2 px-2'>
      <p className='text-xs mx-2'><Link to='/'>Volver</Link></p>
        <p className='text-xs mx-2'><Link to='/printbudget'>Print</Link></p>
      </div>

      <p className='bg-blue-200 text-center text-2xl mb-2 p-2'>Presupuesto</p>

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

      <form action="" onSubmit={handleSubmit} className=' border-2 border-gray-600 p-2 mx-2 mt-2 flex flex-col'>

        <div className='w-full flex justify-between'>
          <p className='w-2/3'>Descripción</p>
          <p className='text-center w-1/4'>Cant.</p>
          <p className='text-center w-1/4'>Precio</p>
        </div>

        <div className='w-full flex justify-between items-center py-1'>
          <input type="text" id="description" className='mr-1 w-2/3 h-5' value={description} onChange={(e) => setDescripcion(e.target.value)} />
          <input type="number" id="cant" className='mx-1 w-1/6 h-5' value={cant} onChange={(e) => setCant(e.target.value)} />
          <input type="number" id="price" className='mx-1 w-1/6 h-5' value={price} onChange={(e) => setPrice(e.target.value)} />
          <button type='submit' className='bg-blue-400  rounded-full w-6 h-5 text-lg text-white flex items-center justify-center'>+</button>
        </div>

        <div>
          <label htmlFor="discount">Descuento</label>
          <input type="number" id="discount" className='mx-1 w-12 h-5' value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </div>

        <div className='flex justify-center'>
          <button className='border w-1/2 m-3 p-1.5 rounded-lg  shadow-inner' style={{ backgroundColor: `${sCButton}` }} onClick={() =>changeButton()} disabled={sDisabled}>{stButton}</button>
          <button className='border w-1/2 m-3 p-1.5 rounded-lg shadow-inner' style={{ backgroundColor: `${cButton}` }} onClick={() => fCalcTotal()} disabled={tDisabled}>{tButton}</button>
        </div>
      </form>

      <div className=' border-2 border-gray-600 p-2 mx-2 mt-2 flex flex-col'>
        {details.map((d) => (
          <div className='w-full flex justify-between items-center py-1' key={d.id}>

            <p className='mr-1 bg-white w-2/3 h-5 flex items-center'>{d.description}</p>
            <p className='mx-1 bg-white w-1/6 h-5 flex justify-center items-center'>{d.cant}</p>
            <p className='mx-1 bg-white w-1/6 h-5 flex justify-center items-center'>{d.price}</p>
            <p className='mx-1 bg-white w-1/6 h-5 flex items-center justify-center'>{d.prod}</p>
            <button className='w-6 h-5 rounded-full flex justify-center items-center text-white text-xs bg-red-600 border-slate-900' onClick={() => console.log(details)}>x</button>


          </div>
        ))}

      </div>

      <div className="mt-2 border-2 border-gray-600 mx-2">
        <div className='flex justify-end px-2'>
          <p className='mx-7'>Sub-Total</p>
          <p>{`${subTotal.toFixed(2)}€`}</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Descuento</p>
          <p>{`${discount}€`}</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Iva(21%)</p>
          <p>{`${iva.toFixed(2)}€`}</p>
        </div>

        <div className='flex justify-end px-2'>
          <p className='mx-7'>Total Presupuesto</p>
          <p>{`${total}`}</p>
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