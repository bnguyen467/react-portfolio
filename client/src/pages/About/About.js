import React from "react";
import Nav from "../../components/Nav";

// Importing Images
import Portrait from "../../components/img/portrait.jpg";

function About() {
  return (
    <>
      <Nav />
      <main className="about">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">
          First thing is... Welcome to my portfolio website!
        </h2>

        <div className="about-info">
          <img src={Portrait} alt="Vernon Nguyen" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              My name is Vernon Nguyen and I am a student at UC Irvine Coding
              Bootcamp. I have spent 2 years in Orange Coast College in Business
              major and transfered to CSU Fullerton but, things did not work out
              so well; therefore, I decided to change my major to Computer
              Science.
            </p>
            <p>
              After switching to technology field, I spent all my time to
              research and self-learning. After 3 months of learning C++ and
              Data Structure, I still did not know where to start and I need a
              solid foundation of knowledge; therefore, I made my way to UCI
              Coding Bootcamp.
            </p>
          </div>

          <div className="skill">
            <h2 className="sm-heading">A Few Skills That I have....</h2>
          </div>

          <div className="job job-1">
            <h2 className="sm-heading">Programming Languages</h2>
            <h3>
              C++, HTML/CSS/SCSS, Javascript, JQuery, Nodejs, Express, MySQL,
              MongoDB, React.js
            </h3>
            <p>
              At UCI Bootcamp, they teach us to be a full-stack developer, which
              means, we have to learn every day and keep it as consistent as
              possible, from frontend to backend.
            </p>
          </div>

          <div className="job job-2">
            <h2 className="sm-heading">Hard Skills</h2>
            <h3>Technical Writing, Mathematics, Problem-solving</h3>
            <p>
              It is the fact that UCI Bootcamp creates a harsh environment to
              educate a student to be a full-stack developer. Thefore these
              basic skills will be naturally improved during the course. Also,
              it is impossible to pass with a perfect A without trying.
            </p>
          </div>

          <div className="job job-3">
            <h2 className="sm-heading">Soft Skills</h2>
            <h3>
              Teamwork & Cooperation, Communication, Attention to Details,
              Organization
            </h3>
            <p>
              I was forced to work as a group every single day during the
              full-stack course. As a result, I realize how important it is to
              work cooperatively.
            </p>
          </div>
        </div>
      </main>

      <footer className="main-footer">
        Copyright &copy; 2020 Portfolio. Made by Vernon Bao Nguyen
      </footer>
    </>
  );
}

export default About;
