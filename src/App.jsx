import Header from "./components/Header"
import Form from "./components/Form"
import Nav from "./components/Nav"
import All from "./components/All"
import { useEffect, useState } from "react"

function App() {

  const [register, setRegister] = useState([]);

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



  return (
    <div className="container mx-auto font-josefin min-w-[320px]">
      <Header />
      <Nav />
      <div className="md:flex">
        <Form
         register={register}
         setRegister={setRegister}
         />

        <All 
        register={register}
        />
      </div>
    </div>
  )
}

export default App
