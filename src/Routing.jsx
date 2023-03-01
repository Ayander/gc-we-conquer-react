import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExternalWebsites from "./pages/ExternalWebsites"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import WebPages from "./pages/WebPages"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/another" exact element={<>test another</>}/> 
               <Route path="/ExternalWebsites/" exact element={<ExternalWebsites/>}/>
               <Route path="/Contacts/" exact element={<Contacts/>}/>
               <Route path="/WebPages/:id" exact element={<WebPages/>}/>

            </Routes>
        </BrowserRouter>


    )
}
export default Routing