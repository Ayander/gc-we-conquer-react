import React from "react"
import Header from "../components/Header"
import ExtWeb from '../components/ExtWeb'
import {useParams} from "react-router-dom"

const ExternalWebsites = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <main>
            <Header />
            <ExtWeb />
        </main>
    )
}
export default ExternalWebsites