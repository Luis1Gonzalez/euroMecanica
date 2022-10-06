import Header from "./components/Header"
import Form from "./components/Form"
import Nav from "./components/Nav"
import All from "./components/All"
import { useState } from "react"

function App() {

  const [register, setRegister] = useState([]);
console.log(register)
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
