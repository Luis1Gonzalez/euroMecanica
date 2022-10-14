import { useEffect, useState } from "react"
import Form from "./../components/Form"
import WrapAll from "./../components/WrapAll"

const Home = ({register, setRegister, registerDel, setRegisterDel, delRegister, setCambiazo, cambiazo}) => {
  
  return  (
    <div className="container mx-auto font-josefin min-w-[320px]">
      <div className="md:flex">
        <Form
         register={register}
         setRegister={setRegister}
         registerDel={registerDel}
         setRegisterDel={setRegisterDel}
         />

        <WrapAll
        register={register}
        setRegisterDel={setRegisterDel}
        delRegister={delRegister}
        setCambiazo={setCambiazo}
        cambiazo={cambiazo}
        />
      </div>
    </div>
  )
}

export default Home