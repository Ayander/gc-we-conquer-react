import React from "react"

const Form = () => {
const mySubmit = (evt) => {
    evt.preventDefault()
    const form = evt.target

    let formData = new FormData(form)

    let extweb = localStorage.extweb

    if(!extweb) {
        extweb = []
    }

    let victim = {
        "Name": formData.get("Name"),
        "Email": formData.get("Email"),  
        "Massage": formData.get("Massage") 
    }
    console.log(victim)

    console.log("Submitting", formData.getAll("Name"))
}
    return (

        <>
            <body className="B1">
                <div className="container1">
                    <div className="content">
                        <div className="left-side">
                            <div className="address details">
                                <div className="topic">Address</div>
                                <div classNames="text-one">Centurion</div>
                                <div className="text-two">South Africa</div>
                            </div>
                            <div className="phone details">
                                <i className="fa-solid fa-phone"></i>
                                <div className="topic">Phone</div>
                                <div classNames="text-one">+27603093241</div>
                                <div className="text-two">+27679881880</div>
                            </div>
                            <div className="email details">
                                <i className="fa-solid fa-envelope"></i>
                                <div className="topic">Email</div>
                                <div className="text-one">ayandarsibanyoni@gmail.com</div>

                            </div>
                        </div>

                        <div className="right-side">
                            <div className="topic-text">Send us a message</div>
                            <p>Tell us a bit about your case that way we know how to assist you</p>

                            <form onSubmit={mySubmit}>

                                <div className="input-box">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                <label htmlFor="Email">Email Address</label>
                                    <input name="Email" type="text" placeholder="Enter your email" required />
                                </div>
                                <div className="input-box message-box">
                                <label htmlFor="Massage">Massage</label>
                                    <textarea name="Massage" id="" row="5" placeholder="Massage"></textarea>
                                </div>
                                <div className="button">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
            <script src="https://kit.fontawesome.com/75e10e2a6d.js" crossorigin="anonymous"></script>
        </>

    )
}
export default Form