import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import { connect } from "react-redux";

class UserInfo extends Component {
  render() {
    const { user } = this.props;
    const { name, avatarURL, answers, questions } = user;
    return (
      <Card className="m-5">
        <Card.Header>
          <Image width='40' height='40' src={avatarURL} roundedCircle /> {name}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Answered Questions : {Object.keys(answers).length}
          </Card.Text>
          <Card.Text>
            Created Questions : {Object.keys(questions).length}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Score : {Object.keys(answers).length + Object.keys(questions).length}
        </Card.Footer>
      </Card>
    );
  }
}
function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}
export default connect(mapStateToProps)(UserInfo);
