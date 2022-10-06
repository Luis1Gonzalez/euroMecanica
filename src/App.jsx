import Header from "./components/Header"
import Form from "./components/Form"
import Nav from "./components/Nav"
import All from "./components/All"

function App() {

  return (
    <div className="container mx-auto font-josefin min-w-[320px]">
      <Header />
      <Nav />
      <div className="md:flex">
        <Form />
        <All />
      </div>
    </div>
  )
}

export default App
