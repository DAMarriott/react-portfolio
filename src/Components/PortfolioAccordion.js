import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={[projects]}
                >
                  {projects.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={[projects]}>
                <Card.Body>
                  <div key={projects.title} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={projects.url} title={projects.title}>
                        <img alt={projects.title} src={projectImage} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{projects.title}</h5>
                            <p>{projects.category}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="fa fa-link"></i>
                        </div>
                      </a>
                    </div>
                    <a href={projects.git}>GIT</a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      });
    }

    return (
      <section id="portfolio">
        <Accordion>{projects}</Accordion>
      </section>
    );
  }
}

export default Portfolio;
