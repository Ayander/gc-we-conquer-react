import React, { useState } from "react";

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    incidentDescription: "",
    seekingHelp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the form submission logic here, such as sending data to a backend API
    console.log(formData);
  };

  return (
    <div className="report-form">
      <h2>Report an Incident and Seek Help</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="incidentDescription">Incident Description:</label>
          <textarea
            name="incidentDescription"
            value={formData.incidentDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="seekingHelp">Seeking Help:</label>
          <textarea
            name="seekingHelp"
            value={formData.seekingHelp}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportForm;
