import React, { Component } from "react";
import { Row, Image, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { formatDate } from "../utils/helper";
import PNF from "./PNF";
class Answered extends Component {
  render() {
    if (this.props.question === null) {
      return <PNF />;
    }
    //  const {avatarUrl} = this.props.users
    const { author, optionOne, timestamp } = this.props.question;
    //console.log()

    return (
      <Row className='justify-content-center m-1'>
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
              <Card.Text> {optionOne.text}</Card.Text>
              <Link to={`questions/${this.props.id}`}>
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
  const question = questions[id];
  return {
    question: question ? question : null,
    users,
    id,
  };
}
export default connect(mapStateToProps)(Answered);
