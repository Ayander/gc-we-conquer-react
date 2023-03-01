import React from "react"
import { Link } from "react-router-dom"


const WebItem = ({ extweb, idx }) => {

    return (
        <div className="web-item">

            <Link to={`/WebPages/${idx}`}>
                <img src={extweb.WebImg} alt={`${extweb.WebName}`} />

                <div className="card">
                    <h4>{extweb.WebName}</h4>
                    <p>{extweb.WebInfo}</p>
                </div>
            </Link>
        </div>
    )
}
export default WebItem