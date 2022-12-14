import Header from "./components/Header"
import { useEffect, useState } from "react"
import Budget from "./pages/Budget"
import Home from "./pages/Home"
import PrintBudget from "./pages/PrintBudget";
import Invoice from "./pages/Invoice";
import PrintInvoice from "./pages/PrintInvoice";
import { Routes, BrowserRouter, Route } from "react-router-dom";





function App() {

  const [register, setRegister] = useState([]);
  const [registerDel, setRegisterDel] = useState({});
  const [cambiazo, setCambiazo] = useState({})
  const [printBudget, setPrintBudget] = useState({})
  const [conjuntTotals, setConjuntTotals] = useState('')
  const [details, setDetails] = useState([])

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

      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<Home
            register={register}
            setRegister={setRegister}
            registerDel={registerDel}
            setRegisterDel={setRegisterDel}
            delRegister={delRegister}
            setCambiazo={setCambiazo}
          />}> </Route>

          <Route path='/budget' element={<Budget
            cambiazo={cambiazo}
            printBudget={printBudget}
            setPrintBudget={setPrintBudget}
            conjuntTotals={conjuntTotals}
            setConjuntTotals={setConjuntTotals}
            details={details}
            setDetails={setDetails}
          />}>
          </Route>

          <Route path='/printbudget' element={<PrintBudget
              cambiazo={cambiazo}
              printBudget={printBudget}
              setPrintBudget={setPrintBudget}
              conjuntTotals={conjuntTotals}
              setConjuntTotals={setConjuntTotals}
              details={details}
              setDetails={setDetails}
            />}>
          </Route>

          <Route path='/invoice' element={<Invoice 
          cambiazo={cambiazo}
          printBudget={printBudget}
          setPrintBudget={setPrintBudget}
          conjuntTotals={conjuntTotals}
          setConjuntTotals={setConjuntTotals}
          details={details}
          setDetails={setDetails}
          />}>
          </Route>

          <Route path='/printinvoice' element={<PrintInvoice
              cambiazo={cambiazo}
              printBudget={printBudget}
              setPrintBudget={setPrintBudget}
              conjuntTotals={conjuntTotals}
              setConjuntTotals={setConjuntTotals}
              details={details}
              setDetails={setDetails}
            />}>
          </Route>


        </Routes>

      </BrowserRouter>



    </div>
  )
}

export default App