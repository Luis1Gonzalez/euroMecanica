import Header from "./components/Header"
import Form from "./components/Form"
import Nav from "./components/Nav"
import WrapAll from "./components/WrapAll"
import { useEffect, useState } from "react"

function App() {

  const [register, setRegister] = useState([]);
  const [registerDel, setRegisterDel] = useState({})

  useEffect(() => {
   const obtenerLS = () => {
    const registerLS = JSON.parse(localStorage.getItem('register')) ?? [];

    setRegister(registerLS)
   }
   obtenerLS()
  }, [])

  // Set el localStorage
  useEffect(() => {
    localStorage.setItem('register', JSON.stringify(register));
  }, [register])

const delRegister = (id) => {
  const updateRegister = register.filter(registerDel => registerDel.id !== id)
  setRegister(updateRegister)
}



  return (
    <div className="container mx-auto font-josefin min-w-[320px]">
      <Header />
      <Nav />
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
        />
      </div>
    </div>
  )
}

export default App