import React, { Component } from "react";
import './LunchTopic.css'

class LunchTopic extends Component {
  componentDidMount = () => {
    this.props.getLunchTopic();
  };

  render() {
    let topics = this.props.topic.map(topics => topics.content);
    let topic = topics[Math.floor(Math.random() * topics.length)];
    return (
      <div className="container">
        <h4>Suggested Lunch Topic: </h4>
        <div className="row">
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="alert alert-success" role="alert">
                 <p className="mb-0">{topic}</p>
             </div>
          </div>

        </div>
       
      </div>
    );
  }
}

export default LunchTopic;
