import React from "react"
import WebItem from "./WebItem"
import MasimanyaneImg from "../assets/Images/External Webs/Masimanyane.png"
import RuralDevelopmenImg from "../assets/Images/External Webs/Rural Developmen.png"
import PowaImg from "../assets/Images/External Webs/Powa.png"
import CrisisImg from "../assets/Images/External Webs/rape crisis.png"
import TearsFoundationImg from "../assets/Images/External Webs/tears foundation.png"
import SonkeGenderJusticeImg from "../assets/Images/External Webs/Sonke Gender justice.png"
import SaferSpacesImg from "../assets/Images/External Webs/Saferspaces.png"
import MatrixMenImg from "../assets/Images/External Webs/MatrixMen.png"


const ExtWeb = () => {
    let extweb = [
        {
            "WebName": "Masimanyane",
            "WebURL": "https://www.masimanyane.org/",
            "WebImg": MasimanyaneImg
        },
        {
            "WebName": "Rural Development",
            "WebURL": "https://rdsp.org.za/",
            "WebImg": RuralDevelopmenImg
        },
        {
            "WebName": "Powa",
            "WebURL": "https://www.powa.co.za/POWA/",
            "WebImg": PowaImg
        },
        {
            "WebName": "Rape crisis",
            "WebURL": "https://rapecrisis.org.za/",
            "WebImg": CrisisImg
        },
        {
            "WebName": "Tears Foundaion",
            "WebURL-": "https://tears.co.za/",
            "WebImg": TearsFoundationImg
        },
        {
            "WebName": "Sonke Gender Justice",
            "WebURL": "https://genderjustice.org.za/",
            "WebImg": SonkeGenderJusticeImg
        },
        {
            "WebName": "SaferSpaces",
            "WebURL": "https://www.saferspaces.org.za/",
            "WebImg": SaferSpacesImg
        },
        {
            "WebName": "MatrixMen",
            "WebURL": "https://matrixmen.org/",
            "WebImg": MatrixMenImg
        }
    ]
    return (
        <section className="ext-web">
          <h2>External Websites</h2>
          <div className="web-list">
            {extweb.map((extweb, idx) => {
              return <WebItem key={idx} extweb={extweb} idx={idx} />;
            })}
          </div>
        </section>
      );
    };

export default ExtWeb