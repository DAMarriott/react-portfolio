import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="project-details">
              <a className="project-title" href={projects.url}>
                {projects.title}
              </a>
              <p className="project-category">{projects.category}</p>
              <div className="project-blurb">
                <p className="project-stack">{projects.stack}</p>
                <p>{projects.features}</p>
                <a href={projects.git}>Code Preview</a>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed centered">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
