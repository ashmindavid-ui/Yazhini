import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title">Contact <span>Us</span></h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
            Have questions about our products or need assistance with your order? 
            We're here to help!
          </p>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>Phone:</strong>
            <p>8344536967</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>Email:</strong>
            <p>divyashree224@gmail.com</p>
          </div>
          
          <div>
            <strong>Address:</strong>
            <p>
              5, Chenthur Nagar,<br />
              Polavakalipalayam Village & Post,<br />
              Gobichettipalayam Taluk,<br />
              Pin code: 638476, Erode District
            </p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-order-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;