import React from 'react'
import All from './All'

const WrapAll = ({register, setRegisterDel, delRegister}) => {

  return (
    <div className=' md:w-1/2'>
{register.map((wrap) => (
    <All 
    key ={wrap.id}
    wrap={wrap}
    setRegisterDel={setRegisterDel}
    delRegister={delRegister}
    />
))}
    </div>
  )
}

export default WrapAll