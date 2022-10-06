import Header from "./components/Header"
import Form from "./components/Form"
import Nav from "./components/Nav"
import All from "./components/All"

function App() {

  return (
    <div className="container mx-auto font-josefin min-w-[320px]">
      <Header />
      <Nav />
      <Form />
      <All />
    </div>
  )
}

export default App
