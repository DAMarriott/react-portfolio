import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skillsFront = this.props.data.skills.map(function(skills) {
        var logo = "images/skills/" + skills.logo;
        if (skills.stack === "a") {
          return (
            <li className="no-list" key={skills.name}>
              <img src={logo} />
            </li>
          );
        }
      });
      var skillsBack = this.props.data.skills.map(function(skills) {
        var logo = "images/skills/" + skills.logo;
        if (skills.stack === "b") {
          return (
            <li className="no-list" key={skills.name}>
              <img src={logo} />
            </li>
          );
        }
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col stack">
            <div className="front">
              <h2>
                <span>FRONT</span>
              </h2>
              <div className="stack-tech">{skillsFront}</div>
            </div>
            <div className="back">
              <h2>
                <span>BACK</span>
              </h2>
              <div className="stack-tech">{skillsBack}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
