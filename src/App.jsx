import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Form from './pages/Form';




const App = () => {
  return (
    <>
       {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/Form">Form</Link>
        <Link to="/About">About</Link>
       </nav>  */}
      <Routes>

        <Route path='/' element={<Home/>}/>
          <Route path='/Form' element={<Form/>}/>
      </Routes>

    </>
  )
}

export default App
