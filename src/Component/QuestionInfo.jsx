import React, { Component } from "react";
import { Card, Image, Row, ProgressBar } from "react-bootstrap";
import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import PNF from "./PNF";

class QuestionInfo extends Component {
  render() {
    const id = this.props.id;
    console.log(this.props.question[id].id);
    if (this.props.question[id] == null) {
      return <PNF />;
    }

    const { author, optionOne, optionTwo, timestamp } = this.props.question[id];
    const votes = optionOne.votes.length + optionTwo.votes.length;
    const optOne = Math.round((optionOne.votes.length / votes) * 100);
    const optTwo = Math.round((optionTwo.votes.length / votes) * 100);

    return (
      <Row className='justify-content-center'>
        <h2>Would You Rather </h2>
        <Card style={{ width: "18rem" }}>
          <Card.Header>
            <Image
              width='40'
              height='40'
              src={this.props.users[author].avatarURL}
              roundedCircle
            />{" "}
            {author}
            <Card.Text>Created : {formatDate(timestamp)} </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Title>Rusults:</Card.Title>
            <Card.Text>{optionOne.text}</Card.Text>

            <ProgressBar now={optOne} label={`${optOne}%`} />
            <small> {optionOne.votes.length} of 3 chosed this</small>
            <h2>OR </h2>

            <Card.Text>{optionTwo.text}</Card.Text>

            <ProgressBar now={optTwo} label={`${optTwo}%`} />
            <small> {optionTwo.votes.length} of 3 chosed this</small>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users }) {
  const question = questions;
  return {
    question: question ? question : null,
    users,
  };
}
export default connect(mapStateToProps)(QuestionInfo);
