import React, { Component } from "react";
import { Card, Col, Image, Button, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import { handleAddAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";
import PNF from "./PNF";
class AddAnswer extends Component {
  constructor() {
    super();
    this.state = {
      answer: "",
      toHome: false,
    };
  }

  render() {
    const id = this.props.id;
    if (this.props.questions[id] == null) {
      return <PNF />;
    }
    const { author, optionOne, optionTwo, timestamp } =
      this.props.questions[id];
    const answer = this.state.answer;
    const { dispatch, authedUser } = this.props;
    const handleChange = (e) => {
      const value = e.target.value;
      this.setState({ answer: value });
    };
    const handleSubmit = (e, qid) => {
      this.setState({
        toHome: true,
        answer: "",
      });
      e.preventDefault();
      dispatch(handleAddAnswer({ authedUser, qid, answer }));
    };
    if (this.state.toHome === true) return <Redirect to={`/questions/${id}`} />;
    return (
      <Row className='justify-content-center m-5'>
        <Card style={{ width: "25rem" }}>
          <Card.Header>
            <Image
              width='40'
              height='40'
              src={this.props.users[author].avatarURL}
              roundedCircle
            />{" "}
            {author}
            <Card.Text>
              {" "}
              <small>
                {" "}
                Created : {formatDate(timestamp)}
                {console.log(this.state.answer)}{" "}
              </small>{" "}
            </Card.Text>
          </Card.Header>
          <Card.Body>
            <Card.Title>Would You Rather</Card.Title>
            <Form onChange={handleChange} onSubmit={(e) => handleSubmit(e, id)}>
              <fieldset>
                <Form.Group as={Row} className='mb-3'>
                  <Col sm={10}>
                    <Form.Check
                      type='radio'
                      label={optionOne.text}
                      name='answer'
                      value='optionOne'
                    />
                    <Form.Check
                      type='radio'
                      label={optionTwo.text}
                      name='answer'
                      value='optionTwo'
                    />
                  </Col>
                </Form.Group>
              </fieldset>

              <Button
                disabled={this.state.answer === ""}
                variant='primary'
                type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  return {
    questions,
    authedUser,
    users,
    id,
  };
}
export default connect(mapStateToProps)(AddAnswer);
