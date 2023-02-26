import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExternalWebsites from "./pages/ExternalWebsites"
import Home from "./pages/Home"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/another" exact element={<>test another</>}/> 
               <Route path="/ExternalWebsites/:id" exact element={<ExternalWebsites/>}/>
            </Routes>
        </BrowserRouter>


    )
}
export default Routing