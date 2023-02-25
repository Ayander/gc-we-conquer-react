import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/another" exact element={<>test another</>}/> 
            </Routes>
        </BrowserRouter>


    )
}
export default Routing