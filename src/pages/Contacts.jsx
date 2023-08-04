import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const Contacts = () => {
  return (
    <main>
      <Header />
      <div className="container1">
        <div className="content">
          <div className="left-side">
            {/* Your contact details content goes here */}
          </div>
          <div className="right-side">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
