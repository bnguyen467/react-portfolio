import React from "react";
import Nav from "../../components/Nav";

function Home() {
  return (
    <div className="bg-image">
      <Nav />
      <main className="home">
        <h1 className="lg-heading">
          Vernon <span className="text-secondary">Nguyen</span>
        </h1>
        <h2 className="sm-heading">
          Student at University of California, Irvine Coding Bootcamp
        </h2>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/vernon-nguyen-5523871b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/bnguyen467"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
