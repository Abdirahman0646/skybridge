import React from 'react';
import './services.css';

const Services = () => {
  const services = [
    {
      title: "Network Solutions",
      description: "Secure and reliable network infrastructure for your business",
      icon: "🔗"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions and migration services",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your data",
      icon: "🛡️"
    },
    {
      title: "IT Support",
      description: "24/7 technical support and maintenance services",
      icon: "⚙️"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your needs",
      icon: "💻"
    },
    {
      title: "Consulting",
      description: "Strategic IT consulting and digital transformation",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;