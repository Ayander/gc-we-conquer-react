import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
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
               <Route path="/404" exact element={<>Page Not Found</>}/>
                <Route path="*" element={<Navigate to={"/404"}/>}/>
            </Routes>
        </BrowserRouter>


    )
}
export default Routing