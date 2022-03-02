import React from "react";

const Footer = () => {
  return (
    <nav class='navbar navbar-dark bg-primary text-center'>
      <div className='container-fluid'>
        <p className='navbar-brand mb-01 h1' style={{ display: "inline" }}>
          Demetrio Herrera - &copy; {new Date().getFullYear()}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
