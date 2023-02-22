import React from "react"
import MasimanyaneImg from "../assets/Images/External Webs/Masimanyane.png"
import RuralDevelopmenImg from "../assets/Images/External Webs/Rural Developmen.png"
import PowaImg from "../assets/Images/External Webs/Powa.png"
import CrisisImg from "../assets/Images/External Webs/rape crisis.png"
import TearsFoundationImg from "../assets/Images/External Webs/tears foundation.png"
import SonkeGenderJusticeImg from "../assets/Images/External Webs/Sonke Gender justice.png"
import SaferSpacesImg from "../assets/Images/External Webs/Saferspaces.png"
import MatrixMenImg from "../assets/Images/External Webs/MatrixMen.png"

const WebItem = () => {
    return (
        <>
        <div class="web-item">
            <a href="https://www.masimanyane.org/" class="disable-link">
                <img src={MasimanyaneImg}alt="Masimanyane" />

                <div class="card">
                    <h4>Masimanyane</h4>
                    <p>We see a society free of gender-based violence where women and children enjoy their full
                        human rights.To eradicate gender-based violence in order to achieve a healthy, safe, secure,
                        equal, responsible and supportive society for all women and girls.</p>
                </div>
            </a>
        </div>

        <div class="web-item">
                <a href="https://rdsp.org.za/" class="disable-link">
                    <img src={RuralDevelopmenImg}alt="Rural Development Support Group" />

                    <div class="card">
                        <h4>Rural Development</h4>
                        <p>Rural community group members participating in RDSP’s programme develop their personal
                            understanding of GBV, strengthen their inter-personal skills and assist those affected by
                            GBV in their communities.</p>
                    </div>
                </a>
            </div>


            <div class="web-item">
                <a href="https://www.powa.co.za/POWA/" class="disable-link">
                    <img src={PowaImg} alt="Powa" />

                    <div class="card">
                        <h4>Powa</h4>
                        <p>A safe and equal society intolerant of all forms of violence against women and girls in all
                            our diversity, where we are treated with respect and dignity and our rights are promoted.
                        </p>
                    </div>
                </a>
            </div> 

            <div class="web-item">
                <a href="https://rapecrisis.org.za/" class="disable-link">
                    <img src={CrisisImg} alt="Rape crisis" />

                    <div class="card">
                        <h4>Rape crisis</h4>
                        <p>Our mission is to promote safety in communities, to reduce the trauma experienced by rape
                            survivors, to encourage the reporting of rape and to work actively to address flaws in
                            legislation.
                        </p>
                    </div>
                </a>
            </div>

            <div class="web-item">
                <a href="https://tears.co.za/" class="disable-link">
                    <img src={TearsFoundationImg} alt="Tears Foundaion" />
                    <div class="card">
                        <h4>Tears Foundaion</h4>
                        <p>TEARS Foundation provides access to crisis intervention, advocacy, counselling, and
                            prevention education services for those impacted by domestic violence, sexual assault and
                            child sexual abuse. Confidential services are provided to all victims at no charge!</p>
                    </div>
                </a>

            </div>
            <div class="web-item">
                <a href="https://genderjustice.org.za/" class="disable-link">
                    <img src={SonkeGenderJusticeImg} alt="Sonke Gender Justice" />

                    <div class="card">
                        <h4>Sonke Gender Justice</h4>
                        <p>Sonke is a South African-based non-profit organisation working throughout Africa. We believe
                            women and men, girls and boys can work together to resist patriarchy, advocate for gender
                            justice and achieve gender transformation.</p>
                    </div>
                </a>
            </div>
            <div class="web-item">
                <a href="https://www.saferspaces.org.za/" class="disable-link">
                    <img src={SaferSpacesImg} alt="SaferSpaces" />

                    <div class="card">
                        <h4>SaferSpaces</h4>
                        <p>SaferSpaces is an interactive platform run by and for community safety and violence
                            prevention practitioners in South Africa to connect, share knowledge and learn from each
                            other.</p>
                    </div>
                </a>
            </div>

            <div class="web-item">
                <a href="https://matrixmen.org/" class="disable-link">
                    <img src={MatrixMenImg} alt="MatrixMen" />

                    <div class="card">
                        <h4>MatrixMen</h4>
                        <p>Our sole purpose is to raise awareness about male survivors of sexual abuse. The aim we have
                            is to empower men that have been victims of sexual abuse to get permission to heal through
                            hearing the stories of men that have been through the same as they have. We want men to hear
                            that they are not alone, they are not the only ones.</p>
                    </div>
                </a>
            </div>
        </>
    )
}
export default WebItem