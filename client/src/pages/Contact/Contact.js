import React from "react";
import Nav from "../../components/Nav";

function Contact() {
  return (
    <>
      <Nav />
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>

        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span> 467bnguyen@gmail.com
          </div>
        </div>
        <div className="boxes">
          <div>
            <span className="text-secondary">Phone:</span> (714)261-7154
          </div>
        </div>
        {/* <div className="boxes">
          <div>
            <span className="text-secondary">Address:</span> 50 Main St City CT
            12345
          </div>
        </div> */}
      </main>

      <footer className="main-footer">
        Copyright &copy; 2020 Portfolio. Made by Vernon Bao Nguyen
      </footer>
    </>
  );
}

export default Contact;
