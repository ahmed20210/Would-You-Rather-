import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import QuestionInfo from "./QuestionInfo";
import AddAnswer from "./AddAnswer";
import PNF from "./PNF";
class Questions extends Component {
  render() {
    const id = this.props.match.params.id;
    if (this.props.questions[id] == null) {
      return <PNF />;
    }
    const answered = this.props.authedAnswer.hasOwnProperty(id) ? true : false;
    return (
      <Fragment>
        {answered ? <QuestionInfo id={id} /> : <AddAnswer id={id} />}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedAnswer: users[authedUser].answers,
    questions,
  };
}

export default connect(mapStateToProps)(Questions);
