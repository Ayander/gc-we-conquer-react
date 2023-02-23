import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element=[<>test</>] />
            </Routes>
        </BrowserRouter>


    )
}
export default Routing