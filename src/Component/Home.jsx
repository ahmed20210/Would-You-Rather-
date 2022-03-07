import React, { Component, Fragment } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Answered from "./Answered";
import { connect } from "react-redux";
import UnAnswered from "./UnAnswered";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Tabs
          defaultActiveKey='UnAnswered'
          transition={false}
          id='noanim-tab-example'
          className='mb-3'>
          <Tab eventKey='UnAnswered' title='UnAnswered'>
            {this.props.unAnsweredQuestion.map((id) => (
              <UnAnswered className='m-1' key={id} id={id} />
            ))}
          </Tab>
          <Tab eventKey='Answered' title='Answered'>
            {this.props.answeredQuestion.map((id) => (
              <Answered className='m-1' key={id} id={id} />
            ))}
          </Tab>
        </Tabs>
      </Fragment>
    );
  }
}
function mapStateToProps({ questions, users, authedUser }) {
  const question = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    answeredQuestion: question.filter((id) =>
      users[authedUser].answers.hasOwnProperty(id)
    ),
    unAnsweredQuestion: question.filter(
      (id) => !users[authedUser].answers.hasOwnProperty(id)
    ),
  };
}

export default connect(mapStateToProps)(Home);
