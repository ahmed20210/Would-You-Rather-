import React, { Component, Fragment } from "react";
import { Form, Button, Card, Row } from "react-bootstrap";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class NewQuestion extends Component {
  constructor() {
    super();
    this.state = {
      optionOne: "",
      optionTwo: "",
      toHome: false,
    };
  }

  render() {
    const handleChange1 = (e) => {
      const value1 = e.target.value;
      this.setState({ optionOne: value1 });
    };

    const handleChange2 = (e) => {
      const value2 = e.target.value;
      this.setState({ optionTwo: value2 });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { dispatch } = this.props;
      const { optionOne, optionTwo } = this.state;
      dispatch(handleAddQuestion(optionOne, optionTwo));
      this.setState({
        optionOne: "",
        optionTwo: "",
        toHome: true,
      });
    };
    if (this.state.toHome === true) return <Redirect to='/' />;

    return (
      <Fragment>
        <Row className='justify-content-center m-5'>
          <Card bg='light' className=' text-center' style={{ width: "30rem" }}>
            <Card.Header>
              <h1>Would You Rather?</h1>
            </Card.Header>
            <Form onSubmit={handleSubmit}>
              <p> test</p>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>option one </Form.Label>
                <Form.Control
                  placeholder='First option'
                  onChange={handleChange1}
                />
              </Form.Group>
              <h3> OR </h3>
              <Form.Group
                className='mb-3'
                onChange={handleChange2}
                controlId='formBasicEmail'>
                <Form.Label>option two </Form.Label>
                <Form.Control placeholder='Second option' />
              </Form.Group>
              <Button
                variant='primary'
                disabled={
                  this.state.optionOne === "" || this.state.optionTwo === ""
                }
                type='submit'>
                Submit
              </Button>
            </Form>
          </Card>
        </Row>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(NewQuestion);
