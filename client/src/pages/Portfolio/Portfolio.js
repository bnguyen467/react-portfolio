import React from "react";
import Nav from "../../components/Nav";
import ProjectCard from "../../components/projectCard";

// Importing Images
import PassGen from "../../components/img/password-generator.png";
import LifeTracker from "../../components/img/life-tracker.png";
import BiteWallet from "../../components/img/bite-wallet.png";
import DayPlanner from "../../components/img/day-planner.gif";
import NoteTaker from "../../components/img/note-taker.png";
import CodeQuiz from "../../components/img/code-quiz.png";

let allProjects = [
  {
    title: "Life Tracker",
    image: LifeTracker,
    website: "https://afternoon-stream-93666.herokuapp.com/",
    github: "https://github.com/DaniBoie/sequelizeActivity",
  },
  {
    title: "Bite Wallet",
    image: BiteWallet,
    website: "https://shellynguyen98.github.io/Project-1/",
    github: "https://github.com/ShellyNguyen98/Project-1",
  },
  {
    title: "Note Taker",
    image: NoteTaker,
    website: "https://thawing-plateau-64257.herokuapp.com/",
    github: "https://github.com/bnguyen467/note-taker",
  },
  {
    title: "Password Generator",
    image: PassGen,
    website: "https://bnguyen467.github.io/password-generator/",
    github: "https://github.com/bnguyen467/password-generator",
  },
  {
    title: "Code Quiz Challenge",
    image: CodeQuiz,
    website: "https://bnguyen467.github.io/code-quiz/",
    github: "https://github.com/bnguyen467/code-quiz",
  },
  {
    title: "Work Day Planner",
    image: DayPlanner,
    website: "https://bnguyen467.github.io/work-day-scheduler/",
    github: "https://github.com/bnguyen467/work-day-scheduler",
  },
];

function Portfolio() {
  return (
    <>
      <Nav />
      <main className="portfolio">
        <h1 class="lg-heading">
          My <span class="text-secondary">Projects</span>
        </h1>
        <h2 class="sm-heading">Projects I have Done So Far...</h2>

        <div className="project">
          {allProjects.map((project) => {
            return (<ProjectCard project={project} />) })}
        </div>
      </main>
    </>
  );
}

export default Portfolio;
