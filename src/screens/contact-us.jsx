import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We will get back to you soon.");
    };

    return (
        <div className="Contact-Container">
            <h2 className="Contact-title">Contact Us</h2>
            <form className="Contact-form" onSubmit={handleSubmit}>
                <div className="Form-group">
                    <label className="Form-label">Name</label>
                    <input className="Form-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="Form-group">
                    <label className="Form-label">Email</label>
                    <input className="Form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="Form-group">
                    <label className="Form-label">Message</label>
                    <textarea className="Form-textarea" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button className="Submit-btn" type="submit">Send Message</button>
            </form>
        </div>

    );
};

export default ContactUs;
