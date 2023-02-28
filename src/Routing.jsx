import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExternalWebsites from "./pages/ExternalWebsites"
import Home from "./pages/Home"
import WebPages from "./pages/WebPages"
import Contacts from "./pages/Contacts"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" exact element={<Home/>}/>
               <Route path="/another" exact element={<>test another</>}/> 
               <Route path="/ExternalWebsites/" exact element={<ExternalWebsites/>}/>
               <Route path="/WebPages:id" exact element={<WebPages/>}/>
               <Route path="/Contacts" exact element={<Contacts/>}/>

            </Routes>
        </BrowserRouter>


    )
}
export default Routing