import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title">About <span>Yazhini Collection</span></h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '2', fontSize: '1.1rem' }}>
        <p>
          Yazhini Collection is a premium ethnic wear brand based in Erode, Tamil Nadu. 
          We bring you the finest collection of traditional and contemporary wear for women.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Our curated collection features exquisite sarees, elegant lehengas, 
          stylish kurtis, and beautiful chudithars that celebrate the rich heritage 
          of Indian textiles and craftsmanship.
        </p>
        <p style={{ marginTop: '1rem' }}>
          At Yazhini Collection, we believe in empowering women through fashion 
          that makes them feel confident, beautiful, and connected to their roots.
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Address:</strong><br />
          5, Chenthur Nagar,<br />
          Polavakalipalayam Village & Post,<br />
          Gobichettipalayam Taluk,<br />
          Pin code: 638476, Erode District
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Contact:</strong><br />
          Phone: 8344536967<br />
          Email: divyashree224@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;