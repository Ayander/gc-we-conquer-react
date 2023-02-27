import React from "react"


const WebItem = ({extweb}) => {
    console.log(extweb)
    return (
            <div className="web-item">
                <a href="https://www.masimanyane.org/" className="disable-link">
                    <img src={extweb.WebImg} alt={`${extweb.WebName}`} />

                    <div className="card">
                        <h4>{extweb.WebName}</h4>
                        <p>{extweb.WebInfo}</p>
                    </div>
                </a>
            </div>
    )
}
export default WebItem