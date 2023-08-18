import React from "react"
import Header from "../components/Header"
import ExtWeb from '../components/ExtWeb'
import ReportForm from "../components/ReportForm"
import ResourcesSection from "../components/ResourcesSection"
import "../App.css"


const ExternalWebsites = () => {
    return (
        <main>
            <Header />
            <div className="external-websites-container">
            <ExtWeb />
            <ResourcesSection />
            <ReportForm />
            </div>
            

        </main>
    )
}
export default ExternalWebsites