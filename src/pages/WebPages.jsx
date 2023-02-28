import React from "react"
import Header from "../components/Header"
import { useParams } from "react-router-dom"

import MasimanyaneImg from "../assets/Images/External Webs/Masimanyane.png"
import RuralDevelopmenImg from "../assets/Images/External Webs/Rural Developmen.png"
import PowaImg from "../assets/Images/External Webs/Powa.png"
import CrisisImg from "../assets/Images/External Webs/rape crisis.png"
import TearsFoundationImg from "../assets/Images/External Webs/tears foundation.png"
import SonkeGenderJusticeImg from "../assets/Images/External Webs/Sonke Gender justice.png"
import SaferSpacesImg from "../assets/Images/External Webs/Saferspaces.png"
import MatrixMenImg from "../assets/Images/External Webs/MatrixMen.png"


const WebPages = () => {
    const { id } = useParams()
    const extweb = [
        {
            "WebName": "Masimanyane",
            "WebInfo": "We see a society free of gender-based violence where women and children enjoy their full human rights.To eradicate gender-based violence in order to achieve a healthy, safe, secure, equal, responsible and supportive society for all women and girls.",
            "WebURL": "https://www.masimanyane.org/",
            "WebImg": MasimanyaneImg
        },
        {
            "WebName": "Rural Development",
            "WebInfo": "ural community group members participating in RDSP’s programme develop their personal understanding of GBV, strengthen their inter-personal skills and assist those affected by GBV in their communities.",
            "WebURL": "https://rdsp.org.za/",
            "WebImg": RuralDevelopmenImg
        },
        {
            "WebName": "Powa",
            "WebInfo": "A safe and equal society intolerant of all forms of violence against women and girls in all our diversity, where we are treated with respect and dignity and our rights are promoted.",
            "WebURL": "https://www.powa.co.za/POWA/",
            "WebImg": PowaImg
        },
        {
            "WebName": "Rape crisis",
            "WebInfo": "Our mission is to promote safety in communities, to reduce the trauma experienced by rape survivors, to encourage the reporting of rape and to work actively to address flaws in legislation.",
            "WebURL": "https://rapecrisis.org.za/",
            "WebImg": CrisisImg
        },
        {
            "WebName": "Tears Foundaion",
            "WebInfo": "TEARS Foundation provides access to crisis intervention, advocacy, counselling, and prevention education services for those impacted by domestic violence, sexual assault and child sexual abuse. Confidential services are provided to all victims at no charge!",
            "WebURL-": "https://tears.co.za/",
            "WebImg": TearsFoundationImg
        },
        {
            "WebName": "Sonke Gender Justice",
            "WebInfo": "Sonke is a South African-based non-profit organisation working throughout Africa. We believe women and men, girls and boys can work together to resist patriarchy, advocate for gender justice and achieve gender transformation.",
            "WebURL": "https://genderjustice.org.za/",
            "WebImg": SonkeGenderJusticeImg
        },
        {
            "WebName": "SaferSpaces",
            "WebInfo": "SaferSpaces is an interactive platform run by and for community safety and violence prevention practitioners in South Africa to connect, share knowledge and learn from each other.",
            "WebURL": "https://www.saferspaces.org.za/",
            "WebImg": SaferSpacesImg
        },
        {
            "WebName": "MatrixMen",
            "WebInfo": "Our sole purpose is to raise awareness about male survivors of sexual abuse. The aim we have is to empower men that have been victims of sexual abuse to get permission to heal through hearing the stories of men that have been through the same as they have. We want men to hear that they are not alone, they are not the only ones.",
            "WebURL": "https://matrixmen.org/",
            "WebImg": MatrixMenImg
        }
    ]

    let currWeb = extweb[+id]

    return (
        <>
            <Header />
            <section className="ext-web">
                <div className="web-list">
                    <div className="web-wrapper">
                        <a href="https://www.masimanyane.org/" class="disable-link">
                            <img src={currWeb.WebImg} alt={`${currWeb.WebName}`} />

                            <div className="card">
                                <h4>{currWeb.WebName}</h4>
                                <p>{currWeb.WebInfo}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WebPages