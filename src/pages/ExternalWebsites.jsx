import React from "react"
import Header from "../components/Header"
import ExtWeb from '../components/ExtWeb'
import "../App.css"


const ExternalWebsites = () => {
    return (
        <main>
            <Header />
            <div className="external-websites-container">
            <ExtWeb />
            </div>
        </main>
    )
}
export default ExternalWebsites