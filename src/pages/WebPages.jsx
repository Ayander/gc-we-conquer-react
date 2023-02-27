import React from "react"
import WebPages from "../components/Header"
import { useParams } from "react-router-dom"

const WebPages = () => {
    const { id } = useParams()
    const extweb = [
        {
            "WebName": "Masimanyane",
            "WebInfo": "We see a society free of gender-based violence where women and children enjoy their full human rights.To eradicate gender-based violence in order to achieve a healthy, safe, secure, equal, responsible and supportive society for all women and girls.",
            "WebURL": "https://www.masimanyane.org/",
            "WebImg": "Images/External Webs/Masimanyane.png"
        },
        {
            "WebName": "Rural Development",
            "WebInfo": "ural community group members participating in RDSP’s programme develop their personal understanding of GBV, strengthen their inter-personal skills and assist those affected by GBV in their communities.",
            "WebURL": "https://rdsp.org.za/",
            "WebImg": "Images/External Webs/Rural Developmen.png"
        },
        {
            "WebName": "Powa",
            "WebInfo": "A safe and equal society intolerant of all forms of violence against women and girls in all our diversity, where we are treated with respect and dignity and our rights are promoted.",
            "WebURL": "https://www.powa.co.za/POWA/",
            "WebImg": "Images/External Webs/Powa.png"
        },
        {
            "WebName": "Rape crisis",
            "WebInfo": "Our mission is to promote safety in communities, to reduce the trauma experienced by rape survivors, to encourage the reporting of rape and to work actively to address flaws in legislation.",
            "WebURL": "https://rapecrisis.org.za/",
            "WebImg": "Images/External Webs/rape crisis.png"
        },
        {
            "WebName": "Tears Foundaion",
            "WebInfo": "TEARS Foundation provides access to crisis intervention, advocacy, counselling, and prevention education services for those impacted by domestic violence, sexual assault and child sexual abuse. Confidential services are provided to all victims at no charge!",
            "WebURL-": "https://tears.co.za/",
            "WebImg": "Images/External Webs/tears foundation.png"
        },
        {
            "WebName": "Sonke Gender Justice",
            "WebInfo": "Sonke is a South African-based non-profit organisation working throughout Africa. We believe women and men, girls and boys can work together to resist patriarchy, advocate for gender justice and achieve gender transformation.",
            "WebURL": "https://genderjustice.org.za/",
            "WebImg": "Images/External Webs/Sonke Gender justice.png"
        },
        {
            "WebName": "SaferSpaces",
            "WebInfo": "SaferSpaces is an interactive platform run by and for community safety and violence prevention practitioners in South Africa to connect, share knowledge and learn from each other.",
            "WebURL": "https://www.saferspaces.org.za/",
            "WebImg": "Images/External Webs/Saferspaces.png"
        },
        {
            "WebName": "MatrixMen",
            "WebInfo": "Our sole purpose is to raise awareness about male survivors of sexual abuse. The aim we have is to empower men that have been victims of sexual abuse to get permission to heal through hearing the stories of men that have been through the same as they have. We want men to hear that they are not alone, they are not the only ones.",
            "WebURL": "https://matrixmen.org/",
            "WebImg": "Images/External Webs/MatrixMen.png"
        }
    ]

    let currWeb = extweb[+id]

    return (
        <>
            <Header />
            <section class="ext-web">
                <div class="web-list">
                    <div class="web-item">
                        <a href="https://www.masimanyane.org/" class="disable-link">
                            <img src={currWeb.WebImg} alt="Masimanyane" />

                            <div class="card">
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