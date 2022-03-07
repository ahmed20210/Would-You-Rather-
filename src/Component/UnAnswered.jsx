import React, { Component } from "react";
import { Row, Image, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import PNF from "./PNF";
class UnAnswered extends Component {
  render() {
    if (this.props.questions === null) {
      return <PNF />;
    }
    const { author, optionOne, timestamp } = this.props.question;
    return (
      <Row className='justify-content-center'>
        <Col className=' text-center' xs={12} md={6}>
          <Card className="m-2">
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
                <small> Created : {formatDate(timestamp)} </small>{" "}
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text> {optionOne.text} </Card.Text>
              <Link to={`/questions/${this.props.id}`}>
                <Button>View Question</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps({ questions, users }, { id }) {
  return {
    question: questions[id],
    users,
    id,
  };
}
export default connect(mapStateToProps)(UnAnswered);
