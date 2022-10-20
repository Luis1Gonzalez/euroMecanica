import React from 'react'
import All from './All'

const WrapAll = ({ register, setRegisterDel, delRegister, setCambiazo, cambiazo, printBudget, setPrintBudget }) => {

  return (
    <div className=' md:w-1/2'>
      {register.map((wrap) => (
        <All
          key={wrap.id}
          wrap={wrap}
          setRegisterDel={setRegisterDel}
          delRegister={delRegister}
          setCambiazo={setCambiazo}
          cambiazo={cambiazo}
          printBudget={printBudget}
          setPrintBudget={setPrintBudget}
        />
      ))}
    </div>
  )
}

export default WrapAll