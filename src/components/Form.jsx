import React from "react"

const Form = () => {

    return (

        <>
            <body className="B1">
                    <div class="container1">
                        <div class="content">
                            <div class="left-side">
                                <div class="address details">
                                    <i class="fa-solid fa-location-smile"></i>
                                    <div class="topic">Address</div>
                                    <div class="text-one">Centurion</div>
                                    <div class="text-two">South Africa</div>
                                </div>
                                <div class="phone details">
                                    <i class="fa-solid fa-phone"></i>
                                    <div class="topic">Phone</div>
                                    <div class="text-one">+27603093241</div>
                                    <div class="text-two">+27679881880</div>
                                </div>
                                <div class="email details">
                                    <i class="fa-solid fa-envelope"></i>
                                    <div class="topic">Email</div>
                                    <div class="text-one">ayandarsibanyoni@gmail.com</div>

                                </div>
                            </div>
                            <div class="right-side">
                                <div class="topic-text">Send us a message</div>
                                <p>Tell us a bit about your case that way we know how to assist you</p>
                                <form action="#">
                                    <div class="input-box">
                                        <input type="text" placeholder="Enter your name" />
                                    </div>
                                    <div class="input-box">
                                        <input type="text" placeholder="Enter your email" />
                                    </div>
                                    <div class="input-box message-box">
                                        <input type="text" placeholder="Massage" />
                                    </div>
                                    <div class="button">
                                        <input type="button" value="Send Now" />
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