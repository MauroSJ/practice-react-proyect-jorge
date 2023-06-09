import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Fromulario from "./components/pages/formulario/Formulario"
import Login from "./components/pages/login/Login"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Fromulario/>}/>  
          <Route path="/home" element={<Home/>} />  
          <Route path="/login" element={<Login/>} />  

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
